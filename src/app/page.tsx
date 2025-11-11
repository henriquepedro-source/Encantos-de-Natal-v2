import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle2, HeartHandshake, Sprout, Wallet, Users, Recycle, Sparkles, BookOpen, Gift, ClipboardCheck, Lightbulb, MessageCircle, Star, Leaf, Wrench, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";

const CTA_URL = "https://pay.kiwify.com.br/53lpb0Y";

const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(p => p.id === id);

export default function Home() {
  const connectionImage = getImage('connection-cozy-room');
  const testimonials = [
    { id: 'testimonial-1', name: 'Ana Clara', role: 'Leitora', text: 'Minha casa ficou linda e acolhedora, tudo com o que eu já tinha.', image: getImage('testimonial-1') },
    { id: 'testimonial-2', name: 'Juliana S.', role: 'Leitora', text: 'É incrível como ideias simples podem criar um clima mágico.', image: getImage('testimonial-2') },
    { id: 'testimonial-3', name: 'Marcos P.', role: 'Leitor', text: 'Transformei meu lar e economizei — melhor investimento do Natal.', image: getImage('testimonial-3') },
  ];
  const transformations = [
    { id: 'transformation-sala', title: 'Na sala', description: 'Ambiente iluminado e acolhedor.', image: getImage('transformation-sala') },
    { id: 'transformation-mesa', title: 'Na mesa', description: 'Detalhes que unem beleza e significado.', image: getImage('transformation-mesa') },
    { id: 'transformation-familia', title: 'Na família', description: 'Momentos de conexão e afeto.', image: getImage('transformation-familia') },
    { id: 'transformation-lar', title: 'No lar', description: 'Um clima leve e cheio de boas energias.', image: getImage('transformation-lar') },
  ];
  const offerItems = [
      { name: "E-book com +100 ideias", value: "R$ 47,00" },
      { name: "+50 ideias bônus", value: "R$ 27,00" },
      { name: "Acesso vitalício e atualizações", value: "R$ 27,00" },
    ];

  return (
    <div className="flex flex-col items-center bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="w-full text-center pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight leading-tight md:leading-tight animate-in fade-in slide-in-from-top-4 duration-1000">
            Transforme o Natal da sua casa com <span className="text-primary">criatividade e significado</span> 🎄
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-top-4 duration-1000 delay-200">
            100 ideias encantadoras pra decorar com o que você já tem — e leve +50 ideias bônus de presente! ✨
          </p>
          <div className="mt-10 animate-in fade-in slide-in-from-top-4 duration-1000 delay-300">
            <Link href="#offer">
              <Button size="lg" className="h-14 text-lg px-10">Quero Transformar Minha Casa Neste Natal</Button>
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>Leitura em qualquer dispositivo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Connection Section */}
      <section id="connection" className="w-full py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {connectionImage && (
              <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                <Image
                  src={connectionImage.imageUrl}
                  alt={connectionImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                  data-ai-hint={connectionImage.imageHint}
                />
              </div>
            )}
            <div className="text-center md:text-left animate-in fade-in slide-in-from-right-8 duration-1000">
              <p className="font-headline text-3xl md:text-4xl leading-snug">
                “Você não precisa gastar muito pra viver um Natal bonito. O que realmente encanta é o <span className="text-primary">clima</span>, a <span className="text-primary">luz</span> e o <span className="text-primary">carinho</span> em cada detalhe.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full bg-muted py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">O que você vai conquistar</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: Wallet, text: "Aprender a decorar gastando pouco" },
              { icon: HeartHandshake, text: "Criar ambientes aconchegantes" },
              { icon: Sparkles, text: "Viver o espírito natalino no lar" },
              { icon: Users, text: "Inspirar a família" },
              { icon: Recycle, text: "Economizar e reaproveitar" },
              { icon: Leaf, text: "Transformar o simples em especial" },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center gap-4 p-4">
                <div className="bg-background rounded-full p-4 shadow-md">
                   <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="product" className="w-full py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000 text-center">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">Encantos de Natal — 100 ideias pra um Natal inesquecível</h2>
              <ul className="mt-8 space-y-4 text-lg max-w-md mx-auto">
                {[
                  "100 ideias principais + 50 bônus",
                  "Tutoriais simples",
                  "Dicas sustentáveis",
                  "Visual inspirador"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="transformation" className="w-full bg-muted py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Como o Encantos de Natal transforma sua casa</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformations.map(item => item.image && (
              <Card key={item.id} className="overflow-hidden text-left shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={item.image.imageUrl}
                  alt={item.image.description}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  data-ai-hint={item.image.imageHint}
                />
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">O que nossos leitores estão dizendo 💬</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <Card key={t.id} className="p-6 text-left shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    {t.image && (
                      <Avatar>
                        <AvatarImage src={t.image.imageUrl} alt={t.name} data-ai-hint={t.image.imageHint} />
                        <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <blockquote className="mt-4 text-lg italic border-l-4 border-secondary pl-4">
                    “{t.text}”
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Section */}
      <section id="included" className="w-full bg-muted py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Tudo o que você recebe por apenas R$9,90:</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 text-lg">
            {[
              { icon: BookOpen, text: "E-book com +100 ideias" },
              { icon: Gift, text: "+50 ideias bônus" },
              { icon: Wrench, text: "Tutoriais simples e práticos" },
              { icon: Lightbulb, text: "Inspirações visuais" },
              { icon: Sparkles, text: "E muito mais!" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="bg-background rounded-full p-3 shadow-md">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Offer CTA Section */}
      <section id="offer" className="w-full py-20 md:py-28 bg-foreground text-background">
        <div className="container max-w-md mx-auto px-4">
          <div className="relative border-2 border-accent/50 rounded-2xl p-8 bg-foreground shadow-[0_0_30px_theme(colors.accent/0.3)]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="bg-accent text-accent-foreground font-bold px-6 py-2 rounded-full text-sm tracking-wider">
                OFERTA ESPECIAL
              </div>
            </div>
            
            <div className="text-center mt-4">
               <h2 className="font-bold text-2xl">E-book + Todos os Bônus</h2>
            </div>
            
            <div className="mt-8 space-y-4 text-lg">
                {offerItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-muted/20 pb-2">
                    <span>{item.name}</span>
                    <span className="font-semibold text-muted-foreground line-through">{item.value}</span>
                  </div>
                ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground text-lg">De <span className="line-through">R$101,00</span></p>
              <p className="text-6xl font-bold text-accent my-2">R$9,90</p>
              <p className="text-muted-foreground">À vista no cartão ou Pix</p>
            </div>

            <div className="mt-10">
              <Link href={CTA_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="w-full h-16 text-xl font-bold bg-accent text-accent-foreground transition-all duration-300 hover:shadow-[0_0_20px_theme(colors.accent/0.5)] transform hover:scale-105">
                  Quero o E-book com os Bônus
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex justify-center items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-16 md:py-24">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">Dúvidas mais comuns</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Preciso ter experiência com decoração?", a: "Não! As ideias são pensadas para todos, desde iniciantes até quem já tem experiência. Os tutoriais são simples e fáceis de seguir." },
              { q: "Posso aplicar em apartamento pequeno?", a: "Com certeza! Muitas ideias são perfeitas para otimizar espaços pequenos e criar um ambiente aconchegante, não importa o tamanho do seu lar." },
              { q: "O material vem com imagens de referência?", a: "Sim! O e-book é ricamente ilustrado com fotografias inspiradoras para te ajudar a visualizar e executar cada ideia." },
              { q: "Recebo o e-book imediatamente após o pagamento?", a: "Sim! O acesso é liberado imediatamente após a confirmação do pagamento. Você receberá tudo por e-mail." },
              { q: "Posso ler pelo celular?", a: "Sim, o e-book é em formato PDF e pode ser lido em qualquer dispositivo: celular, tablet ou computador." },
              { q: "Há custo adicional?", a: "Não, o pagamento é único (R$9,90) e você terá acesso vitalício ao material, incluindo futuras atualizações, sem nenhum custo extra." }
            ].map((item, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="text-left text-lg font-semibold">{item.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="w-full text-center py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">O Natal perfeito começa com o que você já tem ✨</h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme o simples em especial com ideias que encantam e descubra o poder de um lar cheio de luz, amor e significado.
          </p>
          <div className="mt-10">
            <Link href="#offer">
              <Button size="lg" className="h-14 text-lg px-10">Quero Começar Agora</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Natal Aconchegante. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
