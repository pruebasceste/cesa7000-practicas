pipeline {
  agent any

  tools {
    nodejs 'node24'
  }

  options {
    skipDefaultCheckout()
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
    }
  }
}
