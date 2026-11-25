pipeline {
  agent any

  tools {
    nodejs 'node24'
  }

  parameters {
    booleanParam(name: 'PUBLICAR',
      defaultValue: true,
      description: 'Subir la imagen a DockerHub')
  } 
 
  environment {
    IMAGEN  = 'pruebasceste/calculadora'
    VERSION = "1.0.${env.BUILD_NUMBER}"
  }
  
  options {
    skipDefaultCheckout()
    timeout(time: 15, unit: 'MINUTES')
  }

  stages {
    stage('Clonar') {
      steps {
        checkout scm
      }
    }

    stage('Tests') {
      steps {
        sh 'npm ci'
        sh 'npm test'
      }
      post {
        always {
          junit allowEmptyResults: true,
                testResults: 'reports/junit.xml'
          archiveArtifacts artifacts: 'coverage/lcov-report/**',
                          allowEmptyArchive: true
        }
      }
    }


    stage('Build imagen') {
      steps {
        sh "docker build -t ${IMAGEN}:${VERSION} ."
        sh "docker tag ${IMAGEN}:${VERSION} ${IMAGEN}:latest"
      }
    }

    stage('Publicar') {
      when {
        expression { params.PUBLICAR }
      }
      steps {
        withCredentials([usernamePassword(
            credentialsId: 'dockerhub-cred',
            usernameVariable: 'USUARIO',
            passwordVariable: 'TOKEN')]) {
          sh 'echo "$TOKEN" | docker login -u "$USUARIO" --password-stdin'
          sh "docker push ${IMAGEN}:${VERSION}"
          sh "docker push ${IMAGEN}:latest"
        }
      }
    }
  }

  post {
    always {
      sh 'docker logout'
    }
    success {
      echo "Correcto: ${IMAGEN}:${VERSION}"
    }
    failure {
      echo 'Revisar la etapa en rojo'
    }
  }
}
