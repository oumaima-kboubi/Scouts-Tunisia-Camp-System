provider "azurerm" {
  features {}
}

terraform {
  required_providers {
    helm = {
      source  = "hashicorp/helm"
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
