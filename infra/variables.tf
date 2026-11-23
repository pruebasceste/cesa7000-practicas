variable "docker_host" {
  description = "Conexión con Docker"
  type        = string
  default     = "unix:///var/run/docker.sock"
}
 
variable "imagen" {
  description = "Imagen de la calculadora en DockerHub"
  type        = string
  default     = "usuario/calculadora:latest"
}
 
variable "puerto" {
  description = "Puerto del ordenador"
  type        = number
  default     = 3000
}