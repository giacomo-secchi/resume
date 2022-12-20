import fs from 'fs/promises';

export default async function langStrings(lang) {
    return {"it": {
        "download_button": "Visualizza versione stampabile",
        "download_file": "Giacomo_Secchi_CV.pdf",
        "language_name": "Italiano",
        "title": "Curriculum Vitae | Giacomo Secchi | Frontend Web Developer",
        "sections": [{
            "title": "Profilo",
            "description": "Professionista \"T-shaped\" con una profonda conoscenza dello sviluppo front-end web e dell'esperienza utente per siti di e-commerce. "        }, {
            "title": "Professional experience",
            "organizations": [{
                "title": "E-commerce Manager",
                "name": "Francocantiere S.r.l.",
                "date_start": "febbraio 2020",
                "date_end": "presente",
                "description": "Work 360 degree to improve the overall experience of <a href='https://www.francocantiere.it'>Francocantiere</a> e-commerce platform; from Interface to marketing ads and make agreements with local curriers in order to improve the website sales"
            }, {
                "title": "Front-end web developer",
                "name": "YOOX NET-A-PORTER Group",
                "date_start": "giugno 2015",
                "date_end": "febbraio 2020",
                "description": "Create and mantain the interface for some major luxury brands: <a href='https://www.ysl.com/'>YSL</a>, <a href='https://www.stellamccartney.com/'>Stella McCartney</a>, <a href='https://www.therow.com/'>The Row</a>"
            }, {
                "title": "Magento Frontend Developer",
                "name": "MilkyWay S.r.l.",
                "date_start": "maggio 2014",
                "date_end": "giugno 2015",
                "description": "Sviluppo della piattaforma e-commerce www.milkywayshop.it. e del sito corporate milkywaysport.com. Sviluppo e debugging degli elementi frontend dello shop MilkyWay. Sviluppo moduli ed estensioni Magento. Consulenza su UX e design."
            }, {
                "title": "Web Developer",
                "name": "Freelance",
                "date_start": "marzo 2014",
                "date_end": "maggio 2014",
                "description": "realizzazione sito www.floch.it. Sviluppo blog (WordPress) ed implementazione e-commerce (WooCommerce)."
            },{
                "title": "Web Developer / Programmer",
                "name": "Gruppo Ciemme Srl",
                "date_start": "maggio 2012",
                "date_end": "luglio 2012",
                "description": "Realizzazione siti vetrina e aziendali: dalla proposta grafica al frontend in html e css, creazione struttura layout per template W"            }]
        }, {
            "title": "Competenze tecniche",
            "lists": [
                [
                    "CSS/CSS3/LESS/Media queries",
                    "JavaScript",
                    "HTML5/SVG",
                    "Node.js",
                    "PHP",
                    "ReactJS",
                    "Illustrator/Photoshop/Figma",
                    "PrestaShop",
                    "WP/Gutenberg/WooCommerce"
                ]
            ]
        }, {
            "title": "Studi e Formazione",
            "organizations": [{
                "type": "Educational",
                "name": "Università degli studi di Modena e Reggio Emilia",
                "address": {
                    "streetAddress": "2801 Bancroft Street",
                    "addressLocality": "ToledoOO",
                    "addressRegion": "Ohio",
                    "postalCode": "43606",
                    "addressCountry": "U.S.A."
                },
                "course": "Laurea in Scienze della Comunicazione",
                "date_start": "a.a. 2007/2008",
                "date_end": "a.a. 2011/2012",
                "description": "Realizzazione ebooks in formato PDF, esame di Editoria multimediale (30L), Corso per i bibliotecari dell’Università di Modena e Reggio Emilia “Ebook : le caratteristiche, il mercato, l’integrazione in biblioteca”, sviluppo di piccole applicazioni editoriali in codice HTML5. Titolo testi: Riorganizzazione del testo nei libri digitali",
                "link": {
                    "text": "Link",
                    "url": "https://www.example.com"
                }
            }, {
                "type": "Educational",
                "name": "Adista",
                "address": {
                    "streetAddress": "Via Acciaioli 7",
                    "addressLocality": "Roma"
                },
                "course": "HTML 5. Un codice per fare tutto. Per editori e giornalisti",
                "date_start": "dicembre 2011",
                "date_end": "marzo 2012",
                "description": "Professional experience description with link",
                "link": {
                    "text": "Link 2",
                    "url": "https://www.example2.com"
                }
            }]
        }, {
            "title": "Tirocini e stage",
            "organizations": [{
                "title": "Intern Frontend Developer",
                "name": "Caffeina S.r.l.",
                "date_start": "aprile 2013",
                "date_end": "ottobre 2013",
                "description": "Lo stagista entrerà attivamente all'interno del flusso di lavoro aziendale relativo a piccoli progetti, nei quali avrà parte sia nella fase di progettazione che di quella di esecuzione e testing. È stato assegnato allo stagista il ruolo di Frontend Developer orientato ai servizi Web. Ha "
            }, {
                "title": "Tirocinante",
                "name": "Mister Web S.r.l.",
                "date_start": "dicembre 2010",
                "date_end": "febbraio 2011",
                "description": "conoscere gli aspetti operatvi di un’agenzia di comunicazione che lavora soprattutto per il Web ma si occupa anche di comunicazione a 360° (stampa, soluzioni promozionali, pubblicità ecc.). affiancamento alla resp. uff. marketing nell’attuazione delle operazioni di marketing pianificate "            }]
        }, {
            "title": "Languages",
            "lists": [
                [
                    "<strong>Italiano</strong>: Nativo",
                    "<strong>Inglese</strong>: Fluente (livello B2)"
                ]
            ]
        }]
    }
}

 
}