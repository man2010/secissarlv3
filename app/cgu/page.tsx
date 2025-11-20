import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { FileText, Shield, Scale, AlertCircle, CheckCircle2 } from "lucide-react"

const cguImages = [
  { url: "/legal-documents-and-contracts-on-desk.jpg", alt: "Documents juridiques et contrats sur un bureau" },
  { url: "/construction-contract-signing-ceremony.jpg", alt: "Cérémonie de signature de contrat de construction" },
  { url: "/professional-legal-consultation-meeting.jpg", alt: "Réunion de consultation juridique professionnelle" },
]

export default function CGUPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider
        images={cguImages}
        title="Conditions Générales d'Utilisation"
        subtitle="Cadre juridique et conditions d'engagement"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Préambule</h2>
                  <p className="text-muted-foreground">Mise à jour: Janvier 2025</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation des services de SECIS
                SARL, entreprise sénégalaise de construction, d'ingénierie et de services. En faisant appel à nos
                services, vous acceptez pleinement et sans réserve les présentes conditions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">1. Objet et Champ d'Application</h3>
                    <div className="space-y-3 text-foreground/70">
                      <p>
                        SECIS SARL propose une gamme complète de services dans le domaine de la construction, incluant:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Travaux de réhabilitation et rénovation de bâtiments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Conception et réalisation d'ouvrages d'art</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Systèmes d'assainissement et gestion des eaux</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Voiries et réseaux divers (VRD)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>Lots techniques et équipements spécialisés</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">2. Conditions Contractuelles</h3>
                    <div className="space-y-4 text-foreground/70">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.1. Devis et Acceptation</h4>
                        <p>
                          Tout projet débute par l'établissement d'un devis détaillé gratuit. Le devis est valable 60
                          jours à compter de sa date d'émission. L'acceptation du devis par le client, matérialisée par
                          sa signature et le versement de l'acompte convenu, constitue le contrat liant les parties.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.2. Modalités de Paiement</h4>
                        <p className="mb-2">Les paiements s'effectuent selon le calendrier suivant:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Acompte de 30% à la signature du contrat</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Paiements intermédiaires selon l'avancement (40%)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>Solde de 30% à la réception des travaux</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.3. Délais d'Exécution</h4>
                        <p>
                          Les délais d'exécution sont convenus contractuellement. SECIS SARL s'engage à respecter les
                          délais annoncés, sous réserve de cas de force majeure ou de modifications demandées par le
                          client.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">3. Garanties et Responsabilités</h3>
                    <div className="space-y-4 text-foreground/70">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">3.1. Garantie Décennale</h4>
                        <p>
                          Conformément à la réglementation en vigueur, SECIS SARL offre une garantie décennale sur tous
                          les travaux de gros œuvre. Cette garantie couvre les dommages compromettant la solidité de
                          l'ouvrage ou le rendant impropre à sa destination.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">3.2. Garantie de Parfait Achèvement</h4>
                        <p>
                          Une garantie de parfait achèvement d'un an est applicable à compter de la réception des
                          travaux. Elle couvre tous les désordres signalés par le client pendant cette période.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">3.3. Assurances</h4>
                        <p>
                          SECIS SARL souscrit toutes les assurances professionnelles requises, incluant l'assurance
                          responsabilité civile professionnelle et l'assurance tous risques chantier.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">4. Modifications et Résiliation</h3>
                    <div className="space-y-4 text-foreground/70">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">4.1. Modifications du Contrat</h4>
                        <p>
                          Toute modification du projet initial doit faire l'objet d'un avenant écrit signé par les deux
                          parties. Les modifications peuvent entraîner une révision du devis et des délais.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">4.2. Résiliation</h4>
                        <p>
                          En cas de résiliation du contrat par le client, celui-ci s'engage à rembourser les frais
                          engagés et à verser une indemnité forfaitaire de 20% du montant restant dû. En cas de
                          manquement grave du client à ses obligations, SECIS SARL se réserve le droit de suspendre ou
                          résilier le contrat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-4">5. Litiges et Juridiction Compétente</h3>
                <p className="text-foreground/70 leading-relaxed">
                  En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, les parties s'engagent
                  à rechercher une solution amiable. À défaut d'accord, le litige sera porté devant les tribunaux
                  compétents de Dakar, Sénégal. Le droit sénégalais s'applique aux présentes conditions.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-accent/10 border border-accent/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Contact et Information</h3>
              <p className="text-foreground/70 mb-4">
                Pour toute question concernant nos conditions générales d'utilisation, n'hésitez pas à nous contacter:
              </p>
              <div className="space-y-2 text-foreground/70">
                <p>
                  <strong className="text-foreground">Email:</strong> secissarl@gmail.com
                </p>
                <p>
                  <strong className="text-foreground">Téléphone:</strong> 78 632 86 99
                </p>
                <p>
                  <strong className="text-foreground">Adresse:</strong> Diamaguene, Darou Rahmane Villa N°360
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
