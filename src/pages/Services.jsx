
import { useState, useEffect } from 'react';

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allCategories = ['all', 'VCP Spa Packages', 'Facial Procedures', 'Massage', 'Body Exfoliation & Sauna', 'Laser Non-Surgical Procedures', 'Injectables (Botox, Fillers, PRP)', 'IV Drips', 'Weight Loss', 'Morpheus Procedures', 'Dental Procedures', 'Manicure and Pedicure', 'Nail Procedures'];

  const serviceCategories = [
    {
      category: 'VCP Spa Packages',
      services: [
        {
          name: 'The Bridal Glow Package',
          price: '₦465,500',
          duration: '6 hrs, 15 mins',
          description: '7 services designed for your special day (Save 5%)',
          image: '/images/The_Bridal_Glow_Package.jpeg'
        },
        {
          name: 'The Special Event Prep Package',
          price: '₦375,250',
          duration: '5 hrs, 15 mins',
          description: '6 services to prepare you for any special occasion (Save 5%)',
          image: '/images/The_Special_Event_Prep_Package.jpeg'
        },
        {
          name: 'The Gentleman\'s Glow Package',
          price: '₦389,500',
          duration: '5 hrs, 50 mins',
          description: '7 services tailored for men (Save 5%)',
          image: '/images/The_Gentleman\'s_Glow_Package.jpeg'
        },
        {
          name: 'The Holiday Prep Package',
          price: '₦342,000',
          duration: '5 hrs, 5 mins',
          description: '6 services to get you holiday-ready (Save 5%)',
          image: '/images/The_Holiday_Prep_Package.jpeg'
        },
        {
          name: 'The Self Love Package',
          price: '₦256,500',
          duration: '4 hrs, 15 mins',
          description: '5 services for ultimate self-care (Save 5%)',
          image: '/images/The_Self_Love_Package.jpeg'
        },
        {
          name: 'The Serenity Glow Package',
          price: '₦209,000',
          duration: '3 hrs, 15 mins',
          description: '4 services for pure relaxation (Save 5%)',
          image: '/images/The_Serenity_Glow_Package.jpeg'
        }
      ]
    },
    {
      category: 'Facial Procedures',
      services: [
        {
          name: 'VCP Celebrity Facial',
          price: '₦85,000',
          duration: '1 hr',
          description: 'Our signature celebrity-grade facial treatment',
          image: '/images/vcp_celebrity_facial.jpg'
        },
        {
          name: 'Hydra Glow Facial',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Deep hydration for luminous skin',
          image: '/images/hydra_glow_facial.jpg'
        },
        {
          name: 'Glow Peel Facial',
          price: '₦80,000',
          duration: '1 hr',
          description: 'Chemical peel for radiant complexion',
          image: '/images/glow_peel_facial.jpg'
        },
        {
          name: 'Advanced Acne Facial',
          price: '₦75,000',
          duration: '1 hr',
          description: 'Targeted treatment for acne-prone skin',
          image: '/images/advanced_acne_facial.jpg'
        },
        {
          name: 'Rejuvenating Facial',
          price: '₦65,000',
          duration: '1 hr',
          description: 'Revitalize and refresh your skin',
          image: '/images/rejuvenating_facial.jpg'
        },
        {
          name: 'Purifying Acne Facial',
          price: '₦65,000',
          duration: '1 hr',
          description: 'Deep cleansing for clear skin',
          image: '/images/purifying_acne_facial.jpg'
        },
        {
          name: 'Signature Hydrating Facial',
          price: '₦80,000',
          duration: '1 hr',
          description: 'Intense moisture boost',
          image: '/images/signature_hydrating_facial.jpg'
        },
        {
          name: 'Dermaplanning',
          price: '₦60,000',
          duration: '1 hr',
          description: 'Gentle exfoliation for smooth skin',
          image: '/images/dermaplanning.jpg'
        },
        {
          name: 'Deep Cleansing Facial',
          price: '₦35,000',
          duration: '1 hr',
          description: 'Thorough pore cleansing',
          image: '/images/deep_cleansing_facial.jpg'
        },
        {
          name: 'Brightening Facial',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Illuminate dull complexion',
          image: '/images/brightening_facial.jpg'
        },
        {
          name: 'Anti-Aging Facial',
          price: '₦90,000',
          duration: '1 hr',
          description: 'Combat signs of aging',
          image: 'public/images/anti_aging_facial.jpg'
        },
        {
          name: 'Chemical Peel',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Advanced skin resurfacing',
          image: '/images/chemical_peel.jpg'
        },
        {
          name: 'Microneedling with PRP',
          price: '₦120,000',
          duration: '1 hr',
          description: 'Collagen induction with platelet-rich plasma',
          image: '/images/microneedling_with_prp.jpg'
        },
        {
          name: 'Microneedling with Amitone Brightening',
          price: '₦150,000',
          duration: '1 hr',
          description: 'Advanced brightening treatment',
          image: '/images/microneedling_with_amitone.jpg'
        },
        {
          name: 'Microneedling with Serum',
          price: '₦90,000',
          duration: '1 hr',
          description: 'Microneedling with specialized serums',
          image: '/images/microneedling_with_serum.jpg'
        },
        {
          name: 'Mesotherapy with PRP',
          price: '₦150,000',
          duration: '1 hr',
          description: 'Skin rejuvenation with PRP',
          image: '/images/mesotherapy_with_prp.jpg'
        },
        {
          name: 'Mesotherapy with Serum',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Targeted skin therapy',
          image: '/images/mesotherapy_with_serum.jpeg'
        }
      ]
    },
    {
      category: 'Massage',
      services: [
        {
          name: 'Signature Twin Massage',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Couples massage experience',
          image: '/images'
        },
        {
          name: 'VCP Signature Massage',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Our exclusive massage technique',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80'
        },
        {
          name: 'Deep Tissue Massage',
          price: '₦60,000',
          duration: '1 hr',
          description: 'Relieve muscle tension',
          image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=400&q=80'
        },
        {
          name: 'Relaxation Massage',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Gentle, soothing massage',
          image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=80'
        },
        {
          name: 'Aromatherapy Massage',
          price: '₦60,000',
          duration: '1 hr',
          description: 'Massage with essential oils',
          image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80'
        },
        {
          name: 'Swedish Massage',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Classic therapeutic massage',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80'
        },
        {
          name: 'Indian Head Massage',
          price: '₦60,000',
          duration: '1 hr',
          description: 'Traditional scalp and shoulder massage',
          image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=400&q=80'
        },
        {
          name: 'Prenatal Massage',
          price: '₦90,000',
          duration: '1 hr',
          description: 'Safe massage for expectant mothers',
          image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=80'
        },
        {
          name: 'Shoulder Massage',
          price: '₦30,000',
          duration: '30 mins',
          description: 'Targeted shoulder relief',
          image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80'
        },
        {
          name: 'Head Massage',
          price: '₦30,000',
          duration: '30 mins',
          description: 'Relaxing scalp massage',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80'
        }
      ]
    },
    {
      category: 'Body Exfoliation & Sauna',
      services: [
        {
          name: 'Revive Body Exfoliation',
          price: '₦50,000',
          duration: '45 mins',
          description: 'Full body exfoliation treatment',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80'
        },
        {
          name: '24 Karat Radiant Glow Scrub',
          price: '₦70,000',
          duration: '45 mins',
          description: 'Luxurious gold-infused body scrub',
          image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80'
        },
        {
          name: 'Revive Brightening Scrub',
          price: '₦60,000',
          duration: '45 mins',
          description: 'Brightening body exfoliation',
          image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=400&q=80'
        },
        {
          name: 'Sauna',
          price: '₦20,000',
          duration: '30 mins',
          description: 'Detoxifying sauna session',
          image: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?w=400&q=80'
        }
      ]
    },
    {
      category: 'Laser Non-Surgical Procedures',
      services: [
        {
          name: 'Full Body Laser',
          price: '₦500,000',
          duration: '1 hr',
          description: 'Complete body laser treatment',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        },
        {
          name: 'Full Buttocks Laser',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Laser hair removal for buttocks',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
        },
        {
          name: 'Full Face Laser',
          price: '₦80,000',
          duration: '1 hr',
          description: 'Facial laser hair removal',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
        },
        {
          name: 'Gentleman Laser',
          price: '₦40,000',
          duration: '1 hr',
          description: 'Laser hair removal for men',
          image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&q=80'
        },
        {
          name: 'Bikini Laser',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Bikini area laser treatment',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        },
        {
          name: 'Keloid Removal',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Laser keloid scar treatment',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'
        },
        {
          name: 'Laser Cellulite (Skin Tightening)',
          price: '₦90,000',
          duration: '1 hr',
          description: 'Reduce cellulite and tighten skin',
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80'
        },
        {
          name: 'Half Back Laser',
          price: '₦70,000',
          duration: '1 hr',
          description: 'Upper or lower back treatment',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
        },
        {
          name: 'Full Back Laser',
          price: '₦125,000',
          duration: '1 hr',
          description: 'Complete back laser treatment',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        },
        {
          name: 'Full Leg Laser',
          price: '₦140,000',
          duration: '1 hr',
          description: 'Complete leg laser hair removal',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
        },
        {
          name: 'Underarm Laser',
          price: '₦60,000',
          duration: '1 hr',
          description: 'Underarm hair removal',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        },
        {
          name: 'Half Leg Laser',
          price: '₦70,000',
          duration: '1 hr',
          description: 'Upper or lower leg treatment',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
        },
        {
          name: 'Full Arm Laser',
          price: '₦130,000',
          duration: '1 hr',
          description: 'Complete arm laser treatment',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
        },
        {
          name: 'Chest Laser',
          price: '₦65,000',
          duration: '1 hr',
          description: 'Chest hair removal',
          image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&q=80'
        },
        {
          name: 'Half Arm Laser',
          price: '₦65,000',
          duration: '1 hr',
          description: 'Upper or lower arm treatment',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        },
        {
          name: 'Brazilian (Full Pubic Area)',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Complete Brazilian laser',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
        },
        {
          name: 'Lower Belly Laser',
          price: '₦40,000',
          duration: '1 hr',
          description: 'Lower abdomen treatment',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        },
        {
          name: 'Half Face Laser',
          price: '₦45,000',
          duration: '1 hr',
          description: 'Partial facial laser',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
        },
        {
          name: 'Under Chin Laser',
          price: '₦40,000',
          duration: '1 hr',
          description: 'Chin area hair removal',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'
        },
        {
          name: 'Half Chest Laser',
          price: '₦40,000',
          duration: '1 hr',
          description: 'Partial chest treatment',
          image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&q=80'
        },
        {
          name: 'Full Abdomen Laser',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Complete abdominal treatment',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        },
        {
          name: 'Hollywood Laser',
          price: '₦160,000',
          duration: '1 hr',
          description: 'Complete intimate area laser',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
        },
        {
          name: 'Skin Tag Removal',
          price: '₦80,000',
          duration: '1 hr',
          description: 'Remove skin tags safely',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'
        },
        {
          name: 'Laser Nail Fungus',
          price: '₦40,000',
          duration: '50 mins',
          description: 'Treat nail fungus with laser',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        }
      ]
    },
    {
      category: 'Injectables (Botox, Fillers, PRP)',
      services: [
        {
          name: 'Medical Consultation',
          price: '₦20,000',
          duration: '45 mins',
          description: 'Professional assessment and planning',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80'
        },
        {
          name: 'Botox (per unit)',
          price: '₦10,000',
          duration: '1 hr',
          description: 'Wrinkle reduction treatment',
          image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80'
        },
        {
          name: 'Face Fillers',
          price: '₦300,000',
          duration: '1 hr',
          description: 'Facial volume restoration',
          image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80'
        },
        {
          name: 'Body Fillers',
          price: '₦550,000',
          duration: '1 hr',
          description: 'Body contouring fillers',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
        },
        {
          name: 'PRP - Hair Loss',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Hair restoration therapy',
          image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=400&q=80'
        },
        {
          name: 'PRP - Vampire Facial',
          price: '₦120,000',
          duration: '1 hr',
          description: 'Skin rejuvenation with PRP',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
        },
        {
          name: 'PRP - O Shot',
          price: '₦200,000',
          duration: '1 hr',
          description: 'Intimate wellness treatment',
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80'
        },
        {
          name: 'PRP - Knee Shot',
          price: '₦200,000',
          duration: '1 hr',
          description: 'Joint pain relief',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80'
        },
        {
          name: 'PRP - Hip Dip',
          price: '₦200,000',
          duration: '1 hr',
          description: 'Hip contouring treatment',
          image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80'
        },
        {
          name: 'PRP - Stretch Mark',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Reduce stretch mark appearance',
          image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80'
        }
      ]
    },
    {
      category: 'IV Drips',
      services: [
        {
          name: 'VCP Signature IV',
          price: '₦200,000',
          duration: '1 hr',
          description: 'Our premium wellness drip',
          image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80'
        },
        {
          name: 'Glutathione IV',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Skin brightening and antioxidant',
          image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80'
        },
        {
          name: 'Detox IV',
          price: '₦80,000',
          duration: '45 mins',
          description: 'Full body detoxification',
          image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80'
        },
        {
          name: 'Immunity Booster',
          price: '₦70,000',
          duration: '50 mins',
          description: 'Strengthen immune system',
          image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80'
        },
        {
          name: 'Beauty Sleep',
          price: '₦70,000',
          duration: '50 mins',
          description: 'Improve sleep quality',
          image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80'
        },
        {
          name: 'Energy Booster',
          price: '₦80,000',
          duration: '1 hr',
          description: 'Increase energy and vitality',
          image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80'
        }
      ]
    },
    {
      category: 'Weight Loss',
      services: [
        {
          name: 'Lipolysis Injection',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Fat dissolving treatment',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80'
        },
        {
          name: 'Ozempic Weight Loss',
          price: '₦1,000,000',
          duration: '1 hr',
          description: 'Medical weight management',
          image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80'
        }
      ]
    },
    {
      category: 'Morpheus Procedures',
      services: [
        {
          name: 'Full Face Morpheus8',
          price: '₦750,500',
          duration: '1 hr, 30 mins',
          description: 'Complete facial skin tightening',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
        },
        {
          name: 'Double Chin Morpheus8',
          price: '₦450,000',
          duration: '1 hr, 30 mins',
          description: 'Submental contouring',
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&q=80'
        },
        {
          name: 'Jawline Morpheus8',
          price: '₦550,000',
          duration: '1 hr, 30 mins',
          description: 'Jawline definition and tightening',
          image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80'
        }
      ]
    },
    {
      category: 'Dental Procedures',
      services: [
        {
          name: 'Dental Consultation',
          price: '₦20,000',
          duration: '50 mins',
          description: 'Comprehensive dental assessment',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Periapical X-ray',
          price: '₦15,000',
          duration: '20 mins',
          description: 'Dental imaging',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Diamond Teeth Cleaning',
          price: '₦50,000',
          duration: '30 mins',
          description: 'Premium teeth cleaning',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Deep Teeth Cleaning',
          price: '₦70,000',
          duration: '45 mins',
          description: 'Thorough professional cleaning',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Advanced Teeth Cleaning',
          price: '₦90,000',
          duration: '1 hr',
          description: 'Comprehensive dental cleaning',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Diamond Teeth Whitening',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Professional whitening treatment',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Platinum Teeth Whitening',
          price: '₦150,000',
          duration: '1 hr, 30 mins',
          description: 'Premium whitening service',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Dental Filling',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Cavity restoration',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Composite Buildup',
          price: '₦85,000',
          duration: '1 hr',
          description: 'Tooth restoration',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Fluoride Treatment',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Strengthen tooth enamel',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Fissure Sealant',
          price: '₦40,000',
          duration: '1 hr',
          description: 'Protective coating',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Tooth Gem',
          price: '₦20,000',
          duration: '20 mins',
          description: 'Decorative dental jewelry',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Subgingival Curettage',
          price: '₦20,000',
          duration: '1 hr',
          description: 'Deep gum cleaning',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Routine Tooth Extraction',
          price: '₦80,000',
          duration: '1 hr',
          description: 'Safe tooth removal',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Surgical Extraction (Third Molar)',
          price: '₦200,000',
          duration: '1 hr',
          description: 'Wisdom tooth removal',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Root Canal Treatment',
          price: '₦200,000',
          duration: '1 hr',
          description: 'Save infected tooth',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Post and Core Treatment',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Tooth structure restoration',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Ceramic Corrective Braces',
          price: '₦2,200,000',
          duration: '1 hr',
          description: 'Clear orthodontic treatment',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Metal Corrective Braces',
          price: '₦1,900,000',
          duration: '1 hr',
          description: 'Traditional orthodontics',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Dental Implant (per tooth)',
          price: '₦2,500,000',
          duration: '1 hr',
          description: 'Permanent tooth replacement',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Operculectomy',
          price: '₦50,000',
          duration: '1 hr',
          description: 'Gum tissue removal',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Gingivectomy',
          price: '₦90,000',
          duration: '1 hr',
          description: 'Gum reshaping',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Dental Bridge (Zirconia per tooth)',
          price: '₦800,000',
          duration: '1 hr',
          description: 'Premium bridge restoration',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Dental Bridge (PFM per tooth)',
          price: '₦250,000',
          duration: '1 hr',
          description: 'Porcelain-fused-to-metal bridge',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Dental Crown (PFM)',
          price: '₦250,000',
          duration: '1 hr',
          description: 'Standard crown restoration',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Zirconia Dental Crown',
          price: '₦800,000',
          duration: '1 hr',
          description: 'Premium crown restoration',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Porcelain Veneer (per tooth)',
          price: '₦650,000',
          duration: '1 hr',
          description: 'Premium veneers',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Composite Veneer (per tooth)',
          price: '₦300,000',
          duration: '1 hr',
          description: 'Affordable veneers',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Flexible Denture (per tooth)',
          price: '₦100,000',
          duration: '1 hr',
          description: 'Comfortable partial denture',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Acrylic Denture (per tooth)',
          price: '₦55,000',
          duration: '1 hr',
          description: 'Standard denture option',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'IMF (Ivy Loop Wiring)',
          price: '₦85,000',
          duration: '1 hr',
          description: 'Jaw immobilization',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        },
        {
          name: 'Dental Crown Cementation',
          price: '₦40,000',
          duration: '1 hr',
          description: 'Secure crown placement',
          image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80'
        },
        {
          name: 'Fashion Braces',
          price: '₦200,000',
          duration: '1 hr',
          description: 'Decorative braces',
          image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80'
        }
      ]
    },
    {
      category: 'Manicure and Pedicure',
      services: [
        {
          name: 'Big Toe Wrap (both)',
          price: '₦10,000',
          duration: '1 hr',
          description: 'Decorative toe wraps',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Paraffin Wax (hand and feet)',
          price: '₦35,000',
          duration: '1 hr',
          description: 'Moisturizing wax treatment',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Classic Pedicure',
          price: '₦30,000',
          duration: '1 hr',
          description: 'Traditional pedicure service',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Classic Manicure',
          price: '₦15,000',
          duration: '1 hr',
          description: 'Traditional manicure service',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Spa Pedicure with Regular Polish',
          price: '₦25,000',
          duration: '1 hr',
          description: 'Luxurious pedicure experience',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Spa Pedicure with Gel Polish',
          price: '₦30,000',
          duration: '1 hr',
          description: 'Spa pedicure with long-lasting gel',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Spa Manicure and Pedicure',
          price: '₦40,000',
          duration: '1 hr',
          description: 'Complete spa hand and foot care',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        }
      ]
    },
    {
      category: 'Nail Procedures',
      services: [
        {
          name: 'Gel Soak Off',
          price: '₦2,000',
          duration: '1 hr',
          description: 'Safe gel polish removal',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Acrylic Full Set',
          price: '₦40,000',
          duration: '1 hr',
          description: 'Complete acrylic nail application',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Stick-on with Regular Polish',
          price: '₦15,000',
          duration: '1 hr',
          description: 'Press-on nails with polish',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Stick-on with Gel Polish',
          price: '₦20,000',
          duration: '1 hr',
          description: 'Press-on nails with gel polish',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: '3D Chrome Design',
          price: '₦5,000',
          duration: '1 hr',
          description: 'Metallic chrome nail art',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Stone and Pearl',
          price: '₦3,000',
          duration: '1 hr',
          description: 'Elegant nail embellishments',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Pigment Design',
          price: '₦5,000',
          duration: '1 hr',
          description: 'Vibrant pigment nail art',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Marble Design',
          price: '₦5,000',
          duration: '1 hr',
          description: 'Elegant marble effect',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Acrylic Toes Nails',
          price: '₦20,000',
          duration: '1 hr',
          description: 'Acrylic toenail enhancement',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Fiber Glass Nails',
          price: '₦22,000',
          duration: '1 hr',
          description: 'Strong, natural-looking nails',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Nail Wrap',
          price: '₦10,000',
          duration: '1 hr',
          description: 'Decorative nail wraps',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Nail Infill',
          price: '₦15,000',
          duration: '1 hr',
          description: 'Maintain your acrylic nails',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Ombre Nails',
          price: '₦30,000',
          duration: '1 hr',
          description: 'Gradient color effect',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        },
        {
          name: 'Cat Eye Design',
          price: '₦5,000',
          duration: '1 hr',
          description: 'Magnetic gel polish effect',
          image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80'
        },
        {
          name: 'Glitters per Finger',
          price: '₦5,000',
          duration: '1 hr',
          description: 'Sparkle and shine',
          image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&q=80'
        }
      ]
    }
  ];

  // Filter service categories based on search and category selection
  const filteredServiceCategories = serviceCategories
    .map(category => {
      // Filter services within each category
      const filteredServices = category.services.filter(service => {
        const matchesSearch = 
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
      });

      return {
        ...category,
        services: filteredServices
      };
    })
    .filter(category => {
      // Filter by selected category
      const matchesCategory = selectedCategory === 'all' || category.category === selectedCategory;
      // Only show categories that have services after search filtering
      return matchesCategory && category.services.length > 0;
    });

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80" 
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-primary/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Complete Aesthetic & Wellness Services</h1>
          <p className="text-xl">Comprehensive treatments for every aspect of your beauty journey</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-primary"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition text-sm ${
                    selectedCategory === category
                      ? 'bg-gold-gradient text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredServiceCategories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">No services found matching your search.</p>
            </div>
          ) : (
            filteredServiceCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gold-primary border-b-2 border-gold-primary pb-2">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, svcIdx) => {
                  const serviceKey = `${catIdx}-${svcIdx}`;
                  const isExpanded = expandedService === serviceKey;
                  
                  return (
                    <div key={svcIdx} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-gold-primary font-semibold mb-1">{service.price}</p>
                        {service.duration && (
                          <p className="text-sm text-gray-500 mb-3">{service.duration}</p>
                        )}
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="flex gap-2">
                          <button className="flex-1 bg-gold-gradient text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm font-semibold">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Transformation?</h2>
          <p className="text-gray-700 mb-8 text-lg">Schedule a complimentary consultation with our expert team</p>
          <button className="bg-gold-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition">
            Book Your Consultation
          </button>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gold-gradient text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
