/**
 * Mock data for student clubs.
 */

const clubs = [
    {
        id: 1,
        name: { ar: 'نادي الحاسبات', en: 'Computing Club' },
        college: 'computing',
        description: { 
            ar: 'يهدف النادي إلى تنمية مهارات الطلاب التقنية والبرمجية من خلال الورش واللقاءات.',
            en: 'The club aims to develop students technical and programming skills through workshops and meetings.'
        },
        image: '/images/events/hackathon.png',
        members: 1200,
        category: 'academic'
    },
    {
        id: 2,
        name: { ar: 'نادي التصميم', en: 'Design Club' },
        college: 'computing',
        description: { 
            ar: 'مجتمع للمبدعين والمصممين لتبادل الخبرات وتطوير المهارات البصرية.',
            en: 'A community for creators and designers to exchange experiences and develop visual skills.'
        },
        image: '/images/events/workshop.png',
        members: 850,
        category: 'creative'
    },
    {
        id: 3,
        name: { ar: 'نادي المتطوع الصغير', en: 'Volunteer Club' },
        college: 'general',
        description: { 
            ar: 'تعزيز ثقافة العمل التطوعي وخدمة المجتمع الجامعي.',
            en: 'Promoting the culture of volunteer work and serving the university community.'
        },
        image: '/images/events/student-club.png',
        members: 2100,
        category: 'social'
    },
    {
        id: 4,
        name: { ar: 'نادي ريادة الأعمال', en: 'Entrepreneurship Club' },
        college: 'business',
        description: { 
            ar: 'دعم الطلاب في تحويل أفكارهم إلى مشاريع ريادية ناجحة.',
            en: 'Supporting students in turning their ideas into successful entrepreneurial projects.'
        },
        image: '/images/events/career-fair.png',
        members: 650,
        category: 'professional'
    }
];

export default clubs;
