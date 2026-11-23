terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.6.2"
    }
  }
}
 
provider "docker" {
  host = var.docker_host
}

resource "docker_image" "calculadora" {
  name         = var.imagen
  keep_locally = true
}
 
resource "docker_container" "calculadora" {
  name  = "calc-tf"
  image = docker_image.calculadora.image_id
 
  ports {
    internal = 3000
    external = var.puerto
  }
}