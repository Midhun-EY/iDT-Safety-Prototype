class Controller {
    async getAllItems(req, res) {
        // Logic for fetching all items
        res.send('Fetching all items...');
    }

    async createItem(req, res) {
        // Logic for creating an item
        res.send('Creating an item...');
    }

    async getItemById(req, res) {
        // Logic for fetching a single item by ID
        const { id } = req.params;
        res.send(`Fetching item with ID: ${id}`);
    }

    async updateItem(req, res) {
        // Logic for updating an item by ID
        const { id } = req.params;
        res.send(`Updating item with ID: ${id}`);
    }

    async deleteItem(req, res) {
        // Logic for deleting an item by ID
        const { id } = req.params;
        res.send(`Deleting item with ID: ${id}`);
    }
}

module.exports = new Controller();