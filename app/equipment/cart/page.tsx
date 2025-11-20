"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Ciment Portland CEM II 42.5",
      price: 65000,
      quantity: 2,
      unit: "Tonne",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Fer à Béton Ø 8mm",
      price: 850,
      quantity: 50,
      unit: "Kg",
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(
      cartItems
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = 25000
  const total = subtotal + delivery

  return (
    <main className="min-h-screen pt-20 bg-muted/30">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Panier d'Achat</h1>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBag className="w-20 h-20 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Votre panier est vide</h2>
            <p className="text-muted-foreground mb-6">Ajoutez des produits pour commencer votre commande</p>
            <Link href="/equipment/materials">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Voir les Matériaux</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.price.toLocaleString()} FCFA / {item.unit}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 border border-border rounded-lg">
                          <Button size="sm" variant="ghost" onClick={() => updateQuantity(item.id, -1)}>
                            <Minus size={16} />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            className="w-16 text-center border-0 focus-visible:ring-0"
                            readOnly
                          />
                          <Button size="sm" variant="ghost" onClick={() => updateQuantity(item.id, 1)}>
                            <Plus size={16} />
                          </Button>
                        </div>
                        <Button size="sm" variant="destructive" onClick={() => removeItem(item.id)}>
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-accent">
                        {(item.price * item.quantity).toLocaleString()} FCFA
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Résumé de la Commande</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span className="font-semibold">{subtotal.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Livraison</span>
                    <span className="font-semibold">{delivery.toLocaleString()} FCFA</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-accent">{total.toLocaleString()} FCFA</span>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-3" size="lg">
                  Passer la Commande
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Link href="/equipment/materials">
                  <Button variant="outline" className="w-full bg-transparent">
                    Continuer mes Achats
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
