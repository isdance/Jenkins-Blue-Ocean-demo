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
                  sh 'sudo npm install'
                  sh 'sudo npm run lint'
              }
         }
         stage('Test') {
              steps {
                  sh 'sudo npm run test'
              }
         }
     }
}