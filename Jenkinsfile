pipeline {
     agent any
     stages {
         stage('Build') {
             steps {
                 sh 'echo "Hello World"'
                 sh '''
                     echo "Multiline shell steps works too"
                     ls -lah
                 '''
             }
         }
         stage('Lint') {
              steps {
                  sh 'npm install'
                  sh 'npm run lint'
              }
         }
         stage('Test') {
              steps {
                  sh 'npm run test'
              }
         }
     }
}