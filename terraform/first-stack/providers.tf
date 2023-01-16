provider "azurerm" {
  features {}
}

terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.31.0"
    }
  }
   backend "azurerm" {
    resource_group_name = "OumaRS"
    storage_account_name = "backendterraform11"
    container_name = "backendterraform"
    key = "dev.terraform.tfstate"
  }
}