const MOCK = {
    chemicals: [
        {
            "nr": 1,
            "title": "Acebutolol",
            "measuredmass": "337.2119",
            "massbankpresence": "n",
        },
        {
            "nr": 2,
            "title": "Amitriptyline",
            "measuredmass": "278.1901",
            "massbankpresence": "y",
        },
        {
            "nr": 3,
            "title": "Amitriptyline-d3",
            "measuredmass": "281.2094",
            "massbankpresence": "n",
        },
        {
            "nr": 4,
            "title": "Amlodipine",
            "measuredmass": "431.1351",
            "massbankpresence": "y",


        },
        {
            "nr": 5,
            "title": "Amlodipine-d4",
            "measuredmass": "435.1599",
            "massbankpresence": "n",


        },
        {
            "nr": 6,
            "title": "Atazanavir",
            "measuredmass": "705.3004",
            "massbankpresence": "y",


        },
        {
            "nr": 7,
            "title": "Atenolol",
            "measuredmass": "267.1706",
            "massbankpresence": "y",


        },
        {
            "nr": 8,
            "title": "Atenolol-d7",
            "measuredmass": "274.2149",
            "massbankpresence": "n",


        },
        {
            "nr": 9,
            "title": "Atorvastatin-d5",
            "measuredmass": "586.2738",
            "massbankpresence": "n",


        },
        {
            "nr": 10,
            "title": "Azithromycin",
            "measuredmass": "749.5159",
            "massbankpresence": "y",


        },
        {
            "nr": 11,
            "title": "Azithromycin-d3",
            "measuredmass": "752.5352",
            "massbankpresence": "n",


        },
        {
            "nr": 12,
            "title": "Benzoylegonine",
            "measuredmass": "290.1391",
            "massbankpresence": "n",


        },
        {
            "nr": 13,
            "title": "Bisoprolol",
            "measuredmass": "326.2329",
            "massbankpresence": "y",


        },
        {
            "nr": 14,
            "title": "Caffeine",
            "measuredmass": "195.0878",
            "massbankpresence": "y",


        },
        {
            "nr": 15,
            "title": "Carbamazepine",
            "measuredmass": "237.1026",
            "massbankpresence": "y",
        },
        {
            "nr": 18,
            "title": "Celiprolol",
            "measuredmass": "380.2544",
            "massbankpresence": "y",
        },
        {
            "nr": 19,
            "title": "Cetirizine",
            "measuredmass": "389.1631",
            "massbankpresence": "y",
        },
        {
            "nr": 20,
            "title": "Ciprofloxacin",
            "measuredmass": "332.1415",
            "massbankpresence": "y",


        },
        {
            "nr": 21,
            "title": "Ciprofloxacin-d8",
            "measuredmass": "340.1909",
            "massbankpresence": "n",


        },
        {
            "nr": 22,
            "title": "Citalopram",
            "measuredmass": "325.1714",
            "massbankpresence": "y",


        },
        {
            "nr": 23,
            "title": "Clarithromycin",
            "measuredmass": "748.4848",
            "massbankpresence": "y",


        },
        {
            "nr": 24,
            "title": "Clozapine",
            "measuredmass": "327.1374",
            "massbankpresence": "y",


        },
        {
            "nr": 25,
            "title": "Cocaine",
            "measuredmass": "304.1548",
            "massbankpresence": "y",


        },
        {
            "nr": 26,
            "title": "Codeine",
            "measuredmass": "300.1604",
            "massbankpresence": "y",


        },
        {
            "nr": 27,
            "title": "Diclofenac-d4",
            "measuredmass": "300.0498",
            "massbankpresence": "n",


        },
        {
            "nr": 28,
            "title": "Diltiazem",
            "measuredmass": "415.1686",
            "massbankpresence": "y",


        },
        {
            "nr": 29,
            "title": "Dipyridamol",
            "measuredmass": "505.3244",
            "massbankpresence": "n",


        },
        {
            "nr": 30,
            "title": "Eprosartan",
            "measuredmass": "425.1533",
            "massbankpresence": "y",


        },
        {
            "nr": 31,
            "title": "Fexofenadine",
            "measuredmass": "502.2955",
            "massbankpresence": "y",


        },
        {
            "nr": 32,
            "title": "Flecainide",
            "measuredmass": "415.1457",
            "massbankpresence": "y",


        },
        {
            "nr": 33,
            "title": "Hydrocodone",
            "measuredmass": "300.1604",
            "massbankpresence": "y",


        },
        {
            "nr": 34,
            "title": "Irbesartan",
            "measuredmass": "429.240",
            "massbankpresence": "y",


        },
        {
            "nr": 35,
            "title": "Ketoconazole",
            "measuredmass": "531.1565",
            "massbankpresence": "y",


        },
        {
            "nr": 36,
            "title": "Lamotrigine",
            "measuredmass": "256.0158",
            "massbankpresence": "y",


        },
        {
            "nr": 37,
            "title": "Losartan",
            "measuredmass": "423.1696",
            "massbankpresence": "y",


        },
        {
            "nr": 38,
            "title": "MDMA",
            "measuredmass": "194.1176",
            "massbankpresence": "y",


        },
        {
            "nr": 39,
            "title": "Methadone",
            "measuredmass": "310.2168",
            "massbankpresence": "y",


        },
        {
            "nr": 40,
            "title": "Metoclopramide",
            "measuredmass": "300.1480",
            "massbankpresence": "y",


        },
        {
            "nr": 41,
            "title": "Metoprolol",
            "measuredmass": "268.1908",
            "massbankpresence": "y",


        },
        {
            "nr": 42,
            "title": "Metoprolol-d7",
            "measuredmass": "275.2348",
            "massbankpresence": "n",


        },
        {
            "nr": 43,
            "title": "Mirtazapine",
            "measuredmass": "266.1651",
            "massbankpresence": "y",


        },
        {
            "nr": 44,
            "title": "Oxazepam",
            "measuredmass": "163.1224",
            "massbankpresence": "y",


        },
        {
            "nr": 45,
            "title": "Propranolol",
            "measuredmass": "260.1646",
            "massbankpresence": "y",


        },
        {
            "nr": 46,
            "title": "Propranolol-d7",
            "measuredmass": "267.2087",
            "massbankpresence": "n",


        },
        {
            "nr": 47,
            "title": "Quinine",
            "measuredmass": "325.192",
            "massbankpresence": "y",


        },
        {
            "nr": 48,
            "title": "Sitagliptin",
            "measuredmass": "408.1259",
            "massbankpresence": "y",


        },
        {
            "nr": 49,
            "title": "Sotalol",
            "measuredmass": "273.1269",
            "massbankpresence": "y",


        },
        {
            "nr": 50,
            "title": "Sulfamethoxypyridazine-d3",
            "measuredmass": "284.0896",
            "massbankpresence": "n",


        },
        {
            "nr": 51,
            "title": "Sulfapyridine",
            "measuredmass": "250.065",
            "massbankpresence": "y",


        },
        {
            "nr": 52,
            "title": "Sulpiride",
            "measuredmass": "342.1487",
            "massbankpresence": "y",


        },
        {
            "nr": 53,
            "title": "Sumatriptan",
            "measuredmass": "296.1436",
            "massbankpresence": "n",


        },
        {
            "nr": 54,
            "title": "Telmisartan",
            "measuredmass": "515.2461",
            "massbankpresence": "y",


        },
        {
            "nr": 55,
            "title": "Tramadol",
            "measuredmass": "264.1960",
            "massbankpresence": "y",


        },
        {
            "nr": 56,
            "title": "Trimethoprim",
            "measuredmass": "291.1455",
            "massbankpresence": "y",


        },
        {
            "nr": 57,
            "title": "Valsartan",
            "measuredmass": "436.2348",
            "massbankpresence": "y",


        },
        {
            "nr": 58,
            "title": "Venlafaxine",
            "measuredmass": "278.2116",
            "massbankpresence": "y",
        },
        {
            "nr": 59,
            "title": "Venlafaxine,-O-demethyl-",
            "measuredmass": "264.1964",
            "massbankpresence": "n",
        }
    ]
}

module.exports = MOCK;
