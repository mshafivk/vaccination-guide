export default vaccines = [
    {
        vaccineTitle : 'Bacillus Calmette–Guérin (BCG)',
        shortName: 'BCG',
        prevents: [
            'TB',
            'bladder cancer'
        ],
        firstDoseTime: 'birth',
        nextDoseIntervals: [],
        numberOfDoses: 1,
        price: '₹91 – ₹1025'
    },
    {
        vaccineTitle : 'Hepatitis B',
        shortName: 'HepB',
        prevents: [
            'Hepatitis B'
        ],
        firstDoseTime: 'birth',
        doses: [
            {
                doseName: 'Hep – B1',
                time: 'birth'
            },
            {
                doseName: 'Hep – B2',
                time: '6weeks'
            },
            {
                doseName: 'Hep – B3',
                time: '6months'
            }
        ],
        numberOfDoses: 1,
        price: '₹52.25 – ₹6000'
    }
];

///https://www.indianpediatrics.net/oct2014/785.pdf
//http://acvip.org/files/Table%20I-IAP%20Immunization%20Schedule%202016-Final.pdf
//http://parenting.firstcry.com/vaccine-immunization-schedule
//https://www.superbabyonline.com/immunization-schedule-in-india/