namespace API.Entities
{
    public class Basket
    {
        public int Id { get; set; }
        public string BuyerId{ get; set; }
        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Product product, int quantity) {
            if(Items.All(item => item.ProductId != product.Id)) {
                Items.Add(new BasketItem{Product = product, Quantity = quantity});
            }
            
            var existingItem = this.GetItem(product.Id);
            if(existingItem != null) existingItem.Quantity += quantity;
        }

        public void RemoveItem(int productId, int quantity) {
            var item = this.GetItem(productId);
            if (item == null) return;
            item.Quantity -= quantity;
            if(item.Quantity == 0) Items.Remove(item);
        }

        public BasketItem GetItem(int productId) {
            return Items.FirstOrDefault(item => item.ProductId == productId);
        }
    }
}