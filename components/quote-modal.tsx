// components/quote-modal.tsx
'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle2 } from 'lucide-react'

interface QuoteModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  itemName?: string
  itemType: 'material' | 'rental' | 'machinery' | 'service' | 'project'
  itemPrice?: number
  itemUnit?: string // ex: "jour", "Tonne", "Unité"
}

export function QuoteModal({ 
  open, 
  onOpenChange, 
  itemName, 
  itemType, 
  itemPrice,
  itemUnit = "jour"
}: QuoteModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    quantity: '1',
    duration: '1',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      itemType,
      itemName,
      itemPrice,
      itemUnit,
      ...formData,
      quantity: itemType === 'material' ? formData.quantity : undefined,
      duration: (itemType === 'rental' || itemType === 'machinery') ? formData.duration : undefined,
    }

    console.log('[QUOTE] Demande envoyée:', payload)

    // Simulation envoi
    setIsSubmitted(true)
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Reset
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '', phone: '', email: '', company: '',
        quantity: '1', duration: '1', message: ''
      })
      onOpenChange(false)
    }, 3000)
  }

  const getTypeLabel = () => {
    switch (itemType) {
      case 'material': return 'Matériau sélectionné'
      case 'rental': return 'Équipement sélectionné'
      case 'machinery': return 'Engin sélectionné'
      default: return 'Article sélectionné'
    }
  }

  const showQuantity = itemType === 'material'
  const showDuration = itemType === 'rental' || itemType === 'machinery'

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Demander un Devis</DialogTitle>
              <DialogDescription>
                Remplissez le formulaire pour {itemName ? `votre ${getTypeLabel().toLowerCase()}` : 'votre projet'}
              </DialogDescription>
            </DialogHeader>

            {itemName && (
              <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg mb-6">
                <p className="text-sm text-muted-foreground font-medium">{getTypeLabel()} :</p>
                <p className="font-bold text-lg">{itemName}</p>
                {itemPrice && (
                  <p className="text-accent font-semibold">
                    {itemPrice.toLocaleString()} FCFA <span className="text-muted-foreground font-normal">/ {itemUnit}</span>
                  </p>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Moustapha Diallo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+221 78 123 45 67"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@votreentreprise.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Entreprise (facultatif)</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nom de votre entreprise"
                />
              </div>

              {showQuantity && (
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantité souhaitée *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    required={showQuantity}
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  />
                </div>
              )}

              {showDuration && (
                <div className="space-y-2">
                  <Label htmlFor="duration">Durée de location (en jours) *</Label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    required={showDuration}
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="Ex: 7"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message">Message / Détails du projet *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Décrivez votre besoin, le lieu du chantier, les dates souhaitées..."
                  rows={4}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                  Annuler
                </Button>
                <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                  Envoyer la demande
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Demande envoyée !</h3>
            <p className="text-muted-foreground">
              Merci ! Nous vous recontactons sous 24h avec un devis personnalisé.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}