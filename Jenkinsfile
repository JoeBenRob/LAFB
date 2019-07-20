pipeline{
        agent any
        stages{
                stage('---build-mongo---'){
                        steps{
                                sh "sudo docker-compose build mongo"
                        }
                }
                stage('---build-db-connector---'){
                        steps{
                                sh "sudo docker-compose build db_connector"
                        }
                }
                stage('---build-prizegen---'){
                        steps{
                                sh "sudo docker-compose build prize_gen"
                        }
                }
                stage('---build-notification-server---'){
                        steps{
                                sh "sudo docker-compose build notification_server"
                        }
                }
                stage('---build-server---'){
                        steps{
                                sh "sudo docker-compose build server"
                        }
                }
                stage('---build-textgen---'){
                        steps{
                                sh "sudo docker-compose build text_gen"
                        }
                }
                stage('---build-numgen---'){
                        steps{
                                sh "sudo docker-compose build num_gen"
                        }
                }
                stage('---build-static-website---'){
                        steps{
                                sh "sudo docker-compose build static-website"
                        }
                }
                stage('---push-db-connector---'){
                        steps{
                                sh "sudo docker push joebenrob/db_connector:latest"
                        }
                }
                stage('---push-prize-gen---'){
                        steps{
                                sh "sudo docker push joebenrob/prize_gen"
                        }
                }
                stage('---push-notification-server---'){
                        steps{
                                sh "sudo docker push joebenrob/notification_server:latest"
                        }
                }
                stage('---push-server---'){
                        steps{
                                sh "sudo docker push joebenrob/server:latest"
                        }
                }
                stage('---push-textgen---'){
                        steps{
                                sh "sudo docker push joebenrob/text_gen:1"
                        }
                }
                stage('---push-numgen---'){
                        steps{
                                sh "sudo docker push joebenrob/num_gen:1"
                        }
                }
                stage('---push-static-website---'){
                        steps{
                                sh "sudo docker push joebenrob/static_website:latest"
                        }
                }
                stage('---apply-mongo---'){
                        steps{
                                sh "kubectl apply -f mongo/pod.yaml -f mongo/service.yaml"
                        }
                }
                stage('---apply-db-connector---'){
                        steps{
                                sh "kubectl apply -f db_connector/pod.yaml -f db_connector/service.yaml"
                        }
                }
                stage('---apply-prize-generator---'){
                        steps{
                                sh "kubectl apply -f prize_gen/deployment.yaml -f prize_gen/service.yaml"
                        }
                }
                stage('---apply-notification-server---'){
                        steps{
                                sh "kubectl apply -f notification_server/deployment.yaml -f notification_server/service.yaml"
                        }
                }
                stage('---apply-server---'){
                        steps{
                                sh "kubectl apply -f server/deployment.yaml -f server/service.yaml"
                        }
                }
                stage('---apply-textgen---'){
                        steps{
                                sh "kubectl apply -f text_gen/deployment.yaml -f text_gen/service.yaml"
                        }
                }
                stage('---apply-numgen---'){
                        steps{
                                sh "kubectl apply -f num_gen/deployment.yaml -f num_gen/service.yaml"
                        }
                }
                stage('---apply-static-website---'){
                        steps{
                                sh "kubectl apply -f static_website/deployment.yaml -f static_website/service.yaml"
                        }
                }                
                stage('---set-prizegen---'){
                        steps{
                                sh "kubectl set image deployments/prize-gen prize-gen=joebenrob/prize_gen:1"
                                //sh "kubectl set image deployments/prize-gen prize-gen=joebenrob/prize_gen:2"
                        }
                }           
                stage('---set-textgen---'){
                        steps{
                                sh "kubectl set image deployments/text-gen text-gen=joebenrob/text_gen:1"
                                //sh "kubectl set image deployments/text-gen text-gen=joebenrob/text_gen:1"
                        }
                }                
                stage('---set-numgen---'){
                        steps{
                                //sh "kubectl set image deployments/num-gen num-gen=joebenrob/num_gen:1"
                                sh "kubectl set image deployments/num-gen num-gen=joebenrob/num_gen:2"
                        }
                }
        }
}
