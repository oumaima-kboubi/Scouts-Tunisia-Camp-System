terraform {
  required_providers {
    kubernetes = {
        source = "hashicorp/kubernetes"
        version = "~>2.16.0"
    }
    helm = {
        source = "hashicorp/helm"
        version = "~>2.8.0"
    }
  }
  backend "azurerm" {
    resource_group_name = "OumaRS"
    storage_account_name = "backendterraform11"
    container_name = "backendterraform"
    key = "ingress.terraform.tfstate"
  }
}

locals {
    kube_config = one(data.terraform_remote_state.aks.outputs.kube_config)
    host = local.kube_config.host
    username = local.kube_config.username
    password = local.kube_config.password
    client_certificate = base64decode(local.kube_config.client_certificate)
    client_key = base64decode(local.kube_config.client_key)
    cluster_ca_certificate = base64decode(local.kube_config.cluster_ca_certificate)
}

provider "helm" {
  kubernetes {
    host = local.host
    username = local.username
    password = local.password
    client_certificate = local.client_certificate
    client_key = local.client_key
    cluster_ca_certificate = local.cluster_ca_certificate
  }
}