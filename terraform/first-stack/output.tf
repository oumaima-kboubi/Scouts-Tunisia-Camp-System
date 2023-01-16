output "aks_id" {
  value = azurerm_kubernetes_cluster.app.id
}

output "kube_config" {
  value = azurerm_kubernetes_cluster.app.kube_config
  sensitive = true
}