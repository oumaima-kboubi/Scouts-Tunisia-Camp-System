resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
}


resource "azurerm_kubernetes_cluster" "app" {
  name                = "dev-dep-aut"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  dns_prefix = "devdepauto"
  sku_tier            = "Free"
  http_application_routing_enabled = true

  default_node_pool {
    name       = "default"
    node_count = 2
    vm_size    = "Standard_B2s"
    enable_auto_scaling = false
  }

  identity {
    type = "SystemAssigned"
  }

  tags = {
    Environment = "Development"
  }
}