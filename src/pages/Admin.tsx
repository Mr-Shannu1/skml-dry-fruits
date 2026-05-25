import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

function Admin() {
  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");

  // Fetch products
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setProducts(data || []);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product
  const addProduct = async () => {
    if (!name || !price) {
      alert("Please fill required fields");
      return;
    }

    const { error } = await supabase.from("products").insert([
      {
        name,
        description,
        price: Number(price),
        category,
        image,
        stock: Number(stock),
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Product added successfully");

      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage("");
      setStock("");

      fetchProducts();
    }
  };

  // Delete product
  const deleteProduct = async (id: string) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      fetchProducts();
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8EE] p-8">
      <h1 className="text-4xl font-bold text-green-950 mb-8">
        Admin Panel
      </h1>

      {/* Add Product Form */}
      <div className="bg-white p-6 rounded-3xl shadow-xl mb-10">
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 border rounded-2xl"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-4 border rounded-2xl"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-4 border rounded-2xl"
          />

          <input
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="p-4 border rounded-2xl"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="p-4 border rounded-2xl md:col-span-2"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-4 border rounded-2xl md:col-span-2"
            rows={4}
          />
        </div>

        <button
          onClick={addProduct}
          className="mt-6 bg-green-950 text-white px-8 py-4 rounded-2xl hover:scale-105 transition"
        >
          Add Product
        </button>
      </div>

      {/* Products List */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold text-green-950">
                {product.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>

              <p className="mt-3 font-bold text-xl">
                ₹{product.price}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Stock: {product.stock}
              </p>

              <button
                onClick={() => deleteProduct(product.id)}
                className="mt-5 bg-red-500 text-white px-5 py-3 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;