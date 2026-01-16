import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioProjects = [
    { id: 1, category: 'house', title: 'ЖИЛОЙ ДОМ', subtitle: 'Современная архитектура', image: 'https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/ed4504ed-616a-41d7-871b-674a6e438d83.jpg' },
    { id: 2, category: 'apartment', title: 'КВАРТИРА', subtitle: 'Минималистичный интерьер', image: 'https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/3334fa73-baa3-4800-9ebd-7ea9516ec1b4.jpg' },
    { id: 3, category: 'cottage', title: 'КОТТЕДЖ', subtitle: 'Загородная недвижимость', image: 'https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/d666539a-e201-4ed4-99dc-8f82814583d1.jpg' },
  ];

  const filteredProjects = portfolioFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === portfolioFilter);

  const teamMembers = [
    { name: 'Алексей Иванов', role: 'Главный архитектор', experience: '15 лет опыта' },
    { name: 'Мария Петрова', role: 'Архитектор-дизайнер', experience: '10 лет опыта' },
    { name: 'Дмитрий Соколов', role: 'Архитектор проектов', experience: '8 лет опыта' },
  ];

  const workProcess = [
    { step: '01', title: 'КОНСУЛЬТАЦИЯ', desc: 'Обсуждаем ваши идеи, потребности и бюджет проекта' },
    { step: '02', title: 'КОНЦЕПЦИЯ', desc: 'Разрабатываем архитектурную концепцию и эскизы' },
    { step: '03', title: 'ПРОЕКТИРОВАНИЕ', desc: 'Создаём полный комплект рабочей документации' },
    { step: '04', title: 'РЕАЛИЗАЦИЯ', desc: 'Авторский надзор на всех этапах строительства' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-display font-black">АРХИТЕКТУРНОЕ БЮРО</h1>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'team', 'process', 'portfolio', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О бюро'}
                {section === 'team' && 'Команда'}
                {section === 'process' && 'Процесс'}
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
              АРХИТЕКТУРА<br/>
              <span className="text-primary">БУДУЩЕГО</span><br/>
              СЕГОДНЯ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Профессиональное архитектурное бюро. Создаём уникальные проекты жилых и коммерческих объектов 
              с 2009 года.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90"
                onClick={() => scrollToSection('portfolio')}
              >
                Наши проекты
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
                О БЮРО
              </h2>
              <p className="text-lg mb-6">
                Мы — команда профессионалов, влюблённых в архитектуру. За 15 лет работы мы реализовали 
                более 120 проектов, каждый из которых уникален и отражает индивидуальность заказчика.
              </p>
              <p className="text-lg mb-8">
                Наша философия — создание пространств, которые улучшают качество жизни. Мы используем 
                передовые технологии проектирования и следим за мировыми трендами в архитектуре.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 border-0">
                  <div className="text-4xl font-display font-black text-primary mb-2">120+</div>
                  <div className="text-sm text-muted-foreground">Реализованных проектов</div>
                </Card>
                <Card className="p-6 border-0">
                  <div className="text-4xl font-display font-black text-secondary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </Card>
                <Card className="p-6 border-0">
                  <div className="text-4xl font-display font-black text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Профессиональных наград</div>
                </Card>
                <Card className="p-6 border-0">
                  <div className="text-4xl font-display font-black text-secondary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </Card>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img 
                src="https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/d18b7da3-98b9-45af-9fea-c7263d547632.jpg"
                alt="Офис бюро"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4">НАША КОМАНДА</h2>
          <p className="text-xl text-muted-foreground mb-12">Профессионалы своего дела</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/65bf8d6f-99d7-4cb7-9a38-326c684c2b16.jpg"
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-display font-black text-white mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.role}</p>
                      <p className="text-white/70 text-sm">{member.experience}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-12">ПРОЦЕСС РАБОТЫ</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {workProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-display font-black opacity-10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-display font-black mb-4">{item.title}</h3>
                <p className="opacity-90">{item.desc}</p>
                {index < workProcess.length - 1 && (
                  <Icon name="ArrowRight" className="hidden md:block absolute top-12 -right-6 opacity-30" size={32} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-4">ПОРТФОЛИО</h2>
          <p className="text-xl text-muted-foreground mb-8">Избранные проекты</p>
          
          <Tabs value={portfolioFilter} onValueChange={setPortfolioFilter} className="mb-8">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-4 mb-8">
              <TabsTrigger value="all" className="text-sm md:text-base">Все</TabsTrigger>
              <TabsTrigger value="house" className="text-sm md:text-base">Дома</TabsTrigger>
              <TabsTrigger value="apartment" className="text-sm md:text-base">Квартиры</TabsTrigger>
              <TabsTrigger value="cottage" className="text-sm md:text-base">Коттеджи</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-display font-black text-white mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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
              <p className="text-muted-foreground mb-4">
                Полный цикл проектирования частных жилых домов от концепции до рабочей документации.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Архитектурная концепция</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Рабочая документация</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Авторский надзор</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <Icon name="Building2" size={32} className="text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-black mb-4">КВАРТИРЫ</h3>
              <p className="text-muted-foreground mb-4">
                Дизайн-проекты квартир и апартаментов любой площади и сложности.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-secondary" />
                  <span>Перепланировка</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-secondary" />
                  <span>Дизайн интерьера</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-secondary" />
                  <span>Подбор материалов</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-0 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Icon name="TreePine" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-black mb-4">КОТТЕДЖИ</h3>
              <p className="text-muted-foreground mb-4">
                Проектирование загородных коттеджей с учётом ландшафта участка.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Ландшафтное проектирование</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>Инженерные системы</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-primary" />
                  <span>3D визуализация</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 relative h-64 rounded-lg overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/projects/23ac428a-7b36-49c4-9bce-8da46d4654b6/files/552d7f8e-994a-4357-8820-1f412d4daa6a.jpg"
              alt="Награды"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-display font-black mb-4">12 ПРОФЕССИОНАЛЬНЫХ НАГРАД</h3>
                <p className="text-xl">За выдающиеся архитектурные решения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-black mb-4">КОНТАКТЫ</h2>
            <p className="text-xl text-muted-foreground mb-12">Начните свой проект с нами</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-black mb-6">СВЯЗАТЬСЯ С НАМИ</h3>
                <div className="space-y-4 mb-8">
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
                      <div className="text-muted-foreground">info@archi-bureau.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">Москва, ул. Архитектурная, 25</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">Часы работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 19:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <Input placeholder="Ваше имя" className="h-12" />
                <Input type="email" placeholder="Email" className="h-12" />
                <Input type="tel" placeholder="Телефон" className="h-12" />
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Тип проекта" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">Жилой дом</SelectItem>
                    <SelectItem value="apartment">Квартира</SelectItem>
                    <SelectItem value="cottage">Коттедж</SelectItem>
                    <SelectItem value="commercial">Коммерческий объект</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Расскажите о вашем проекте" className="min-h-32" />
                <Button className="w-full h-12 text-lg bg-secondary hover:bg-secondary/90">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Отправляя заявку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-display font-black mb-4">АРХИТЕКТУРНОЕ БЮРО</h3>
              <p className="text-sm opacity-75">Создаём архитектуру будущего с 2009 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm opacity-75">
                <button onClick={() => scrollToSection('about')} className="block hover:opacity-100">О бюро</button>
                <button onClick={() => scrollToSection('portfolio')} className="block hover:opacity-100">Портфолио</button>
                <button onClick={() => scrollToSection('services')} className="block hover:opacity-100">Услуги</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/30">
                  <Icon name="Linkedin" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-accent-foreground/10 pt-8 text-center text-sm opacity-75">
            <p>© 2024 Архитектурное Бюро. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;