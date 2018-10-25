const MOCK = {
    instruments: [
        {
            brand: 'Agilent',
            model: '6545XT',
            sources: 'APC1'
        },
        {
            brand: 'Bruler',
            model: 'timsTOF Pro',
            sources: 'CaptiveSpray'
        }
    ],
    options: {
        Agilent: {
            models: ['6545XT', '6500', '6530', '6545', '6550', '6560', '6200', '6230B'],
            sources: ['APCI', 'Multimode', 'APPI', 'Nanospray', 'Electrospray', 'Capillary', 'Electrospray', 'Jet Stream'],
        },
        Bruler: {
            models: ['timsTOF Pro', 'microOTOF', 'focus II', 'compact', 'impact II', 'maXis II', 'timsTOF', 'scimaX', 'solariX'],
            sources: ['CaptiveSpray', 'nanoBooster', 'ionBooster', 'APCI II', 'APPI II', 'DirectProbe'],
        },
        PerkinElmer: {
            models: ['AxION 2 TOF'],
            sources: []
        },
        'Sciex': {
            models: ['4600', '4800', '5600', '5600+', '5800', '6600', 'X500R', 'X500B'],
            sources: ['Turbo V', 'Ion Drive Turbo V', 'OptiFlow Turbo V', 'DuoSpray Turbo V', 'NanoSpray III', 'Digital PicoView NanoSpray', 'Luxon', 'PhotoSpray']
        },
        'Shimadzu': {
            models: ['LCMS-9030', 'LCMS-IT-TOF'],
            sources: ['ESI', 'APCI']
        },
        'Thermo Fisher': {
            models: ['Exactive Plus (EMR)', 'Q Exactive Focus', 'Q Exactive (Plus)', 'Q Exactive HF', 'Q Exactive HF-X', 'Orbitrap Elite', 'Orbitrap Fusion', 'Orbitrap Fusion Lumos'],
            sources: ['Easy-Spray', 'Easy-Spray NG', 'Easy-Max NG', 'Ion Max', 'Ion Max NG', 'Nanospray Flex NG', 'Easy-IC', 'EASY-ETD']
        },
        'Waters': {
            models: ['Xevo G2 - XS', '	Xevo G2', '	Xevo G2 - S	Vion IMS', '	Synapty G2 - Si', '	MALDI Synapt G2 - Si'],
            sources: ['UniSpray	', 'ionKey	', 'LockSpray ', '	NanoLockSpray', '	APPI / APCI ', 'Dual - Mode']

        },
    }
}


module.exports = MOCK;