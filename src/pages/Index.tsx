import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-display font-black">АРХИТЕКТ</h1>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'portfolio', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О компании'}
                {section === 'portfolio' && 'Портфолио'}
                {section === 'services' && 'Услуги'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center pt-20 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <h1 className="text-7xl md:text-9xl font-display font-black leading-none mb-6">
              СОЗДАЁМ<br/>
              <span className="text-primary">ПРОСТРАНСТВА</span><br/>
              ДЛЯ ЖИЗНИ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Архитектурное проектирование жилых домов, квартир и коттеджей. Современные решения для комфортной жизни.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90"
              onClick={() => scrollToSection('portfolio')}
            >
              Смотреть проекты
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
                О НАС
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Мы создаём архитектуру, которая меняет качество жизни. Каждый проект — это баланс между эстетикой, 
                функциональностью и индивидуальностью клиента.
              </p>
              <p className="text-lg mb-8 opacity-90">
                Наша команда состоит из опытных архитекторов и дизайнеров, которые работают над каждым проектом 
                с полной отдачей, создавая пространства, в которых хочется жить.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-display font-black text-primary mb-2">120+</div>
                  <div className="text-sm opacity-75">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-black text-secondary mb-2">15</div>
                  <div className="text-sm opacity-75">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-black text-primary mb-2">98%</div>
                  <div className="text-sm opacity-75">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] hidden md:block">
              <div className="absolute inset-0 bg-primary/10 rotate-3"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Home" size={200} className="opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4">ПОРТФОЛИО</h2>
          <p className="text-xl text-muted-foreground mb-12">Избранные проекты</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/ed4504ed-616a-41d7-871b-674a6e438d83.jpg" 
                  alt="Жилой дом"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-display font-black text-white mb-2">ЖИЛОЙ ДОМ</h3>
                    <p className="text-white/80">Современная архитектура</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/3334fa73-baa3-4800-9ebd-7ea9516ec1b4.jpg" 
                  alt="Квартира"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-display font-black text-white mb-2">КВАРТИРА</h3>
                    <p className="text-white/80">Минималистичный интерьер</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/d666539a-e201-4ed4-99dc-8f82814583d1.jpg" 
                  alt="Коттедж"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-display font-black text-white mb-2">КОТТЕДЖ</h3>
                    <p className="text-white/80">Загородная недвижимость</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-12">УСЛУГИ</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Icon name="Home" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-black mb-4">ЖИЛЫЕ ДОМА</h3>
              <p className="text-muted-foreground">
                Полный цикл проектирования частных жилых домов от концепции до рабочей документации. 
                Индивидуальный подход к каждому проекту.
              </p>
            </Card>

            <Card className="p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Icon name="Building2" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-black mb-4">КВАРТИРЫ</h3>
              <p className="text-muted-foreground">
                Дизайн-проекты квартир и апартаментов. Перепланировка, зонирование пространства, 
                подбор материалов и мебели.
              </p>
            </Card>

            <Card className="p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Icon name="TreePine" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-black mb-4">КОТТЕДЖИ</h3>
              <p className="text-muted-foreground">
                Проектирование загородных коттеджей с учётом ландшафта и климатических особенностей. 
                Создание гармоничной среды для загородной жизни.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-4">КОНТАКТЫ</h2>
            <p className="text-xl text-muted-foreground mb-12">Обсудим ваш проект</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-black mb-6">СВЯЗАТЬСЯ С НАМИ</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@architect.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">Москва, ул. Примерная, 1</div>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <Input placeholder="Ваше имя" className="h-12" />
                <Input type="email" placeholder="Email" className="h-12" />
                <Input type="tel" placeholder="Телефон" className="h-12" />
                <Textarea placeholder="Расскажите о вашем проекте" className="min-h-32" />
                <Button className="w-full h-12 text-lg bg-secondary hover:bg-secondary/90">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-black mb-4">АРХИТЕКТ</h2>
          <p className="text-sm opacity-75">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
