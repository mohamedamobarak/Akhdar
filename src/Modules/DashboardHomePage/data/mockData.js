import colorCircle from '../../../assets/Dashboard-home-page-14/colorCircle.svg'
import flag from '../../../assets/Dashboard-home-page-14/egyptFlag.svg'
import marketPic1 from '../../../assets/Dashboard-home-page-14/market-pic1.png'
import marketPic2 from '../../../assets/Dashboard-home-page-14/market-pic2.png'
import marketPic3 from '../../../assets/Dashboard-home-page-14/market-pic3.png'
import marketPic4 from '../../../assets/Dashboard-home-page-14/market-pic4.png'

export const carbonEmissionData = {
  value: 35.3,
  breakdown: [
    { label: 'Gas', value: 40, color: '#004D40' },
    { label: 'Car', value: 35, color: '#81F18E' },
    { label: 'Travel', value: 25, color: '#D6EFD7' }
  ]
};

export const offsetData = {
  value: 35.3,
  offsetted: '12/22 Tons are offsetted',
  percentage: 60 // 60% offsetted
};

export const projectsData = [
  {
    id: 1,
    title: 'Fuel Efficient Stoves',
    type: 'Carbon Offsetting',
    location: 'Afghanistan',
    year: 'SAR 20.15',
    image: marketPic1,
    category: 'Clean Water',
    flag: flag,
    colorIndicator: colorCircle,
    sdgIcon: '5'
  },
  {
    id: 2,
    title: 'Safe Water Project',
    type: 'Reforestation',
    location: 'Brazil',
    year: 'SAR 19.99',
    image: marketPic2,
    category: 'Ocean Plastic',
    flag: flag,
    colorIndicator: colorCircle,
    sdgIcon: '6'
  },
  {
    id: 3,
    title: 'Catalytic N2O destruction',
    type: 'Reforestation',
    location: 'Netherlands',
    year: 'SAR 15.50',
    image: marketPic3,
    category: 'Reforestation',
    flag: flag,
    colorIndicator: colorCircle,
    sdgIcon: '13'
  },
  {
    id: 4,
    title: 'Community Solar Initiative',
    type: 'Carbon Offsetting',
    location: 'Egypt',
    year: 'SAR 25.75',
    image: marketPic4,
    category: 'Social Justice',
    flag: flag,
    colorIndicator: colorCircle,
    sdgIcon: '7'
  }
];

export const projectCategories = [
  { name: 'Clean Water', count: 'See Projects', color: 'bg-green-100' },
  { name: 'Ocean Plastic', count: 'See Projects', color: 'bg-green-100' },
  { name: 'Reforestation', count: 'See Projects', color: 'bg-green-100' },
  { name: 'Social Justice', count: 'See Projects', color: 'bg-green-100' },
  { name: 'Education', count: 'See Projects', color: 'bg-green-100' }
];

export const offsetHistoryData = [
  {
    orderId: '156163',
    type: 'Carbon offset',
    partners: 'Akhdar',
    projects: 'Projects',
    from: 'Egypt',
    price: '2015 SAR',
    impact: 'Offsetting',
    createdAt: '10/5/2025'
  },
  {
    orderId: '156163',
    type: 'Carbon offset',
    partners: 'Akhdar',
    projects: 'Projects',
    from: 'Egypt',
    price: '2015 SAR',
    impact: 'Offsetting',
    createdAt: '10/5/2025'
  },
  {
    orderId: '156163',
    type: 'Carbon offset',
    partners: 'Akhdar',
    projects: 'Projects',
    from: 'Egypt',
    price: '2015 SAR',
    impact: 'Offsetting',
    createdAt: '10/5/2025'
  }
];

export const subscriptionsData = [
  {
    project: 'Fuel Efficient Stoves',
    type: 'Carbon Offset',
    price: '2015 SAR/Month'
  },
  {
    project: 'Fuel Efficient Stoves',
    type: 'Carbon Offset',
    price: '2015 SAR/Month'
  },
  {
    project: 'Fuel Efficient Stoves',
    type: 'Carbon Offset',
    price: '2015 SAR/Month'
  }
];

// Configuration for toggling between empty and populated states
// Carbon emission history data
export const carbonEmissionHistory = [
  {
    id: "ce-001",
    date: "2025-01-15",
    timestamp: "2025-01-15 14:30:00",
    totalEmission: 42.8,
    breakdown: [
      { category: "Gas", value: 18.5, color: "#004D40" },
      { category: "Car", value: 15.2, color: "#81F18E" },
      { category: "Travel", value: 9.1, color: "#D6EFD7" }
    ],
    calculationMethod: "Manual Entry",
    notes: "Monthly calculation including home office setup"
  },
  {
    id: "ce-002",
    date: "2024-12-20",
    timestamp: "2024-12-20 09:15:00",
    totalEmission: 38.9,
    breakdown: [
      { category: "Gas", value: 16.8, color: "#004D40" },
      { category: "Car", value: 13.7, color: "#81F18E" },
      { category: "Travel", value: 8.4, color: "#D6EFD7" }
    ],
    calculationMethod: "Automated",
    notes: "Holiday season reduced travel"
  },
  {
    id: "ce-003",
    date: "2024-11-18",
    timestamp: "2024-11-18 16:45:00",
    totalEmission: 45.2,
    breakdown: [
      { category: "Gas", value: 19.8, color: "#004D40" },
      { category: "Car", value: 16.9, color: "#81F18E" },
      { category: "Travel", value: 8.5, color: "#D6EFD7" }
    ],
    calculationMethod: "Manual Entry"
  },
  {
    id: "ce-004",
    date: "2024-10-22",
    timestamp: "2024-10-22 11:20:00",
    totalEmission: 41.6,
    breakdown: [
      { category: "Gas", value: 17.2, color: "#004D40" },
      { category: "Car", value: 15.8, color: "#81F18E" },
      { category: "Travel", value: 8.6, color: "#D6EFD7" }
    ],
    calculationMethod: "Automated",
    notes: "Increased heating usage"
  },
  {
    id: "ce-005",
    date: "2024-09-25",
    timestamp: "2024-09-25 13:10:00",
    totalEmission: 39.4,
    breakdown: [
      { category: "Gas", value: 15.9, color: "#004D40" },
      { category: "Car", value: 14.2, color: "#81F18E" },
      { category: "Travel", value: 9.3, color: "#D6EFD7" }
    ],
    calculationMethod: "Manual Entry",
    notes: "Summer vacation period"
  },
  {
    id: "ce-006",
    date: "2024-08-28",
    timestamp: "2024-08-28 10:05:00",
    totalEmission: 37.1,
    breakdown: [
      { category: "Gas", value: 14.5, color: "#004D40" },
      { category: "Car", value: 13.8, color: "#81F18E" },
      { category: "Travel", value: 8.8, color: "#D6EFD7" }
    ],
    calculationMethod: "Automated"
  },
  {
    id: "ce-007",
    date: "2024-07-30",
    timestamp: "2024-07-30 15:25:00",
    totalEmission: 43.7,
    breakdown: [
      { category: "Gas", value: 18.9, color: "#004D40" },
      { category: "Car", value: 16.1, color: "#81F18E" },
      { category: "Travel", value: 8.7, color: "#D6EFD7" }
    ],
    calculationMethod: "Manual Entry",
    notes: "Business travel included"
  }
];

export const dashboardConfig = {
  hasCalculationData: true,
  hasProjectData: true,
  hasLocationData: true,
  hasHistoryData: true
};
