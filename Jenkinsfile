pipeline {
     agent any
     stages {
         stage('Build') {
             steps {
                 sh 'echo "Build Start"'
                 sh 'npm install --loglevel verbose'
                 sh 'npm run build'
             }
         }
         stage('Lint') {
              steps {
                  sh 'npm run lint'
              }
         }
         stage('Test') {
              steps {
                  sh 'CI=true npm test'
              }
         }
     }
}