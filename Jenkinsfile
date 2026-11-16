pipeline {
  agent any
  stages {
    stage('Comprobar entorno') {
      steps {
        echo 'Repositorio descargado'
        sh 'ls -la'
        sh 'docker version'
      }
    }
  }
}
