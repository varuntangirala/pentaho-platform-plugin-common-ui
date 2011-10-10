/**
 * Timezone Utility to generate a timezone offset string from a given timezone.
 */
pentaho.common.prompting.timeutil = {
  offsets: {
    "ACT": 570,
    "AET": 600,
    "AGT": -180,
    "ART": 120,
    "AST": -540,
    "Africa/Abidjan": 0,
    "Africa/Accra": 0,
    "Africa/Addis_Ababa": 180,
    "Africa/Algiers": 60,
    "Africa/Asmara": 180,
    "Africa/Asmera": 180,
    "Africa/Bamako": 0,
    "Africa/Bangui": 60,
    "Africa/Banjul": 0,
    "Africa/Bissau": 0,
    "Africa/Blantyre": 120,
    "Africa/Brazzaville": 60,
    "Africa/Bujumbura": 120,
    "Africa/Cairo": 120,
    "Africa/Casablanca": 0,
    "Africa/Ceuta": 60,
    "Africa/Conakry": 0,
    "Africa/Dakar": 0,
    "Africa/Dar_es_Salaam": 180,
    "Africa/Djibouti": 180,
    "Africa/Douala": 60,
    "Africa/El_Aaiun": 0,
    "Africa/Freetown": 0,
    "Africa/Gaborone": 120,
    "Africa/Harare": 120,
    "Africa/Johannesburg": 120,
    "Africa/Kampala": 180,
    "Africa/Khartoum": 180,
    "Africa/Kigali": 120,
    "Africa/Kinshasa": 60,
    "Africa/Lagos": 60,
    "Africa/Libreville": 60,
    "Africa/Lome": 0,
    "Africa/Luanda": 60,
    "Africa/Lubumbashi": 120,
    "Africa/Lusaka": 120,
    "Africa/Malabo": 60,
    "Africa/Maputo": 120,
    "Africa/Maseru": 120,
    "Africa/Mbabane": 120,
    "Africa/Mogadishu": 180,
    "Africa/Monrovia": 0,
    "Africa/Nairobi": 180,
    "Africa/Ndjamena": 60,
    "Africa/Niamey": 60,
    "Africa/Nouakchott": 0,
    "Africa/Ouagadougou": 0,
    "Africa/Porto-Novo": 60,
    "Africa/Sao_Tome": 0,
    "Africa/Timbuktu": 0,
    "Africa/Tripoli": 120,
    "Africa/Tunis": 60,
    "Africa/Windhoek": 60,
    "America/Adak": -600,
    "America/Anchorage": -540,
    "America/Anguilla": -240,
    "America/Antigua": -240,
    "America/Araguaina": -180,
    "America/Argentina/Buenos_Aires": -180,
    "America/Argentina/Catamarca": -180,
    "America/Argentina/ComodRivadavia": -180,
    "America/Argentina/Cordoba": -180,
    "America/Argentina/Jujuy": -180,
    "America/Argentina/La_Rioja": -180,
    "America/Argentina/Mendoza": -180,
    "America/Argentina/Rio_Gallegos": -180,
    "America/Argentina/Salta": -180,
    "America/Argentina/San_Juan": -180,
    "America/Argentina/San_Luis": -240,
    "America/Argentina/Tucuman": -180,
    "America/Argentina/Ushuaia": -180,
    "America/Aruba": -240,
    "America/Asuncion": -240,
    "America/Atikokan": -300,
    "America/Atka": -600,
    "America/Bahia": -180,
    "America/Barbados": -240,
    "America/Belem": -180,
    "America/Belize": -360,
    "America/Blanc-Sablon": -240,
    "America/Boa_Vista": -240,
    "America/Bogota": -300,
    "America/Boise": -420,
    "America/Buenos_Aires": -180,
    "America/Cambridge_Bay": -420,
    "America/Campo_Grande": -240,
    "America/Cancun": -360,
    "America/Caracas": -270,
    "America/Catamarca": -180,
    "America/Cayenne": -180,
    "America/Cayman": -300,
    "America/Chicago": -360,
    "America/Chihuahua": -420,
    "America/Coral_Harbour": -300,
    "America/Cordoba": -180,
    "America/Costa_Rica": -360,
    "America/Cuiaba": -240,
    "America/Curacao": -240,
    "America/Danmarkshavn": 0,
    "America/Dawson": -480,
    "America/Dawson_Creek": -420,
    "America/Denver": -420,
    "America/Detroit": -300,
    "America/Dominica": -240,
    "America/Edmonton": -420,
    "America/Eirunepe": -240,
    "America/El_Salvador": -360,
    "America/Ensenada": -480,
    "America/Fort_Wayne": -300,
    "America/Fortaleza": -180,
    "America/Glace_Bay": -240,
    "America/Godthab": -180,
    "America/Goose_Bay": -240,
    "America/Grand_Turk": -300,
    "America/Grenada": -240,
    "America/Guadeloupe": -240,
    "America/Guatemala": -360,
    "America/Guayaquil": -300,
    "America/Guyana": -240,
    "America/Halifax": -240,
    "America/Havana": -300,
    "America/Hermosillo": -420,
    "America/Indiana/Indianapolis": -300,
    "America/Indiana/Knox": -360,
    "America/Indiana/Marengo": -300,
    "America/Indiana/Petersburg": -300,
    "America/Indiana/Tell_City": -360,
    "America/Indiana/Vevay": -300,
    "America/Indiana/Vincennes": -300,
    "America/Indiana/Winamac": -300,
    "America/Indianapolis": -300,
    "America/Inuvik": -420,
    "America/Iqaluit": -300,
    "America/Jamaica": -300,
    "America/Jujuy": -180,
    "America/Juneau": -540,
    "America/Kentucky/Louisville": -300,
    "America/Kentucky/Monticello": -300,
    "America/Knox_IN": -360,
    "America/La_Paz": -240,
    "America/Lima": -300,
    "America/Los_Angeles": -480,
    "America/Louisville": -300,
    "America/Maceio": -180,
    "America/Managua": -360,
    "America/Manaus": -240,
    "America/Marigot": -240,
    "America/Martinique": -240,
    "America/Matamoros": -360,
    "America/Mazatlan": -420,
    "America/Mendoza": -180,
    "America/Menominee": -360,
    "America/Merida": -360,
    "America/Mexico_City": -360,
    "America/Miquelon": -180,
    "America/Moncton": -240,
    "America/Monterrey": -360,
    "America/Montevideo": -180,
    "America/Montreal": -300,
    "America/Montserrat": -240,
    "America/Nassau": -300,
    "America/New_York": -300,
    "America/Nipigon": -300,
    "America/Nome": -540,
    "America/Noronha": -120,
    "America/North_Dakota/Center": -360,
    "America/North_Dakota/New_Salem": -360,
    "America/Ojinaga": -420,
    "America/Panama": -300,
    "America/Pangnirtung": -300,
    "America/Paramaribo": -180,
    "America/Phoenix": -420,
    "America/Port-au-Prince": -300,
    "America/Port_of_Spain": -240,
    "America/Porto_Acre": -240,
    "America/Porto_Velho": -240,
    "America/Puerto_Rico": -240,
    "America/Rainy_River": -360,
    "America/Rankin_Inlet": -360,
    "America/Recife": -180,
    "America/Regina": -360,
    "America/Resolute": -300,
    "America/Rio_Branco": -240,
    "America/Rosario": -180,
    "America/Santa_Isabel": -480,
    "America/Santarem": -180,
    "America/Santiago": -240,
    "America/Santo_Domingo": -240,
    "America/Sao_Paulo": -180,
    "America/Scoresbysund": -60,
    "America/Shiprock": -420,
    "America/St_Barthelemy": -240,
    "America/St_Johns": -210,
    "America/St_Kitts": -240,
    "America/St_Lucia": -240,
    "America/St_Thomas": -240,
    "America/St_Vincent": -240,
    "America/Swift_Current": -360,
    "America/Tegucigalpa": -360,
    "America/Thule": -240,
    "America/Thunder_Bay": -300,
    "America/Tijuana": -480,
    "America/Toronto": -300,
    "America/Tortola": -240,
    "America/Vancouver": -480,
    "America/Virgin": -240,
    "America/Whitehorse": -480,
    "America/Winnipeg": -360,
    "America/Yakutat": -540,
    "America/Yellowknife": -420,
    "Antarctica/Casey": 660,
    "Antarctica/Davis": 300,
    "Antarctica/DumontDUrville": 600,
    "Antarctica/Mawson": 300,
    "Antarctica/McMurdo": 720,
    "Antarctica/Palmer": -240,
    "Antarctica/Rothera": -180,
    "Antarctica/South_Pole": 720,
    "Antarctica/Syowa": 180,
    "Antarctica/Vostok": 360,
    "Arctic/Longyearbyen": 60,
    "Asia/Aden": 180,
    "Asia/Almaty": 360,
    "Asia/Amman": 120,
    "Asia/Anadyr": 720,
    "Asia/Aqtau": 300,
    "Asia/Aqtobe": 300,
    "Asia/Ashgabat": 300,
    "Asia/Ashkhabad": 300,
    "Asia/Baghdad": 180,
    "Asia/Bahrain": 180,
    "Asia/Baku": 240,
    "Asia/Bangkok": 420,
    "Asia/Beirut": 120,
    "Asia/Bishkek": 360,
    "Asia/Brunei": 480,
    "Asia/Calcutta": 330,
    "Asia/Choibalsan": 480,
    "Asia/Chongqing": 480,
    "Asia/Chungking": 480,
    "Asia/Colombo": 330,
    "Asia/Dacca": 360,
    "Asia/Damascus": 120,
    "Asia/Dhaka": 360,
    "Asia/Dili": 540,
    "Asia/Dubai": 240,
    "Asia/Dushanbe": 300,
    "Asia/Gaza": 120,
    "Asia/Harbin": 480,
    "Asia/Ho_Chi_Minh": 420,
    "Asia/Hong_Kong": 480,
    "Asia/Hovd": 420,
    "Asia/Irkutsk": 480,
    "Asia/Istanbul": 120,
    "Asia/Jakarta": 420,
    "Asia/Jayapura": 540,
    "Asia/Jerusalem": 120,
    "Asia/Kabul": 270,
    "Asia/Kamchatka": 720,
    "Asia/Karachi": 300,
    "Asia/Kashgar": 480,
    "Asia/Kathmandu": 345,
    "Asia/Katmandu": 345,
    "Asia/Kolkata": 330,
    "Asia/Krasnoyarsk": 420,
    "Asia/Kuala_Lumpur": 480,
    "Asia/Kuching": 480,
    "Asia/Kuwait": 180,
    "Asia/Macao": 480,
    "Asia/Macau": 480,
    "Asia/Magadan": 660,
    "Asia/Makassar": 480,
    "Asia/Manila": 480,
    "Asia/Muscat": 240,
    "Asia/Nicosia": 120,
    "Asia/Novokuznetsk": 360,
    "Asia/Novosibirsk": 360,
    "Asia/Omsk": 360,
    "Asia/Oral": 300,
    "Asia/Phnom_Penh": 420,
    "Asia/Pontianak": 420,
    "Asia/Pyongyang": 540,
    "Asia/Qatar": 180,
    "Asia/Qyzylorda": 360,
    "Asia/Rangoon": 390,
    "Asia/Riyadh": 180,
    "Asia/Riyadh87": 187,
    "Asia/Riyadh88": 187,
    "Asia/Riyadh89": 187,
    "Asia/Saigon": 420,
    "Asia/Sakhalin": 600,
    "Asia/Samarkand": 300,
    "Asia/Seoul": 540,
    "Asia/Shanghai": 480,
    "Asia/Singapore": 480,
    "Asia/Taipei": 480,
    "Asia/Tashkent": 300,
    "Asia/Tbilisi": 240,
    "Asia/Tehran": 210,
    "Asia/Tel_Aviv": 120,
    "Asia/Thimbu": 360,
    "Asia/Thimphu": 360,
    "Asia/Tokyo": 540,
    "Asia/Ujung_Pandang": 480,
    "Asia/Ulaanbaatar": 480,
    "Asia/Ulan_Bator": 480,
    "Asia/Urumqi": 480,
    "Asia/Vientiane": 420,
    "Asia/Vladivostok": 600,
    "Asia/Yakutsk": 540,
    "Asia/Yekaterinburg": 300,
    "Asia/Yerevan": 240,
    "Atlantic/Azores": -60,
    "Atlantic/Bermuda": -240,
    "Atlantic/Canary": 0,
    "Atlantic/Cape_Verde": -60,
    "Atlantic/Faeroe": 0,
    "Atlantic/Faroe": 0,
    "Atlantic/Jan_Mayen": 60,
    "Atlantic/Madeira": 0,
    "Atlantic/Reykjavik": 0,
    "Atlantic/South_Georgia": -120,
    "Atlantic/St_Helena": 0,
    "Atlantic/Stanley": -240,
    "Australia/ACT": 600,
    "Australia/Adelaide": 570,
    "Australia/Brisbane": 600,
    "Australia/Broken_Hill": 570,
    "Australia/Canberra": 600,
    "Australia/Currie": 600,
    "Australia/Darwin": 570,
    "Australia/Eucla": 525,
    "Australia/Hobart": 600,
    "Australia/LHI": 630,
    "Australia/Lindeman": 600,
    "Australia/Lord_Howe": 630,
    "Australia/Melbourne": 600,
    "Australia/NSW": 600,
    "Australia/North": 570,
    "Australia/Perth": 480,
    "Australia/Queensland": 600,
    "Australia/South": 570,
    "Australia/Sydney": 600,
    "Australia/Tasmania": 600,
    "Australia/Victoria": 600,
    "Australia/West": 480,
    "Australia/Yancowinna": 570,
    "BET": -180,
    "BST": 360,
    "Brazil/Acre": -240,
    "Brazil/DeNoronha": -120,
    "Brazil/East": -180,
    "Brazil/West": -240,
    "CAT": 120,
    "CET": 60,
    "CNT": -210,
    "CST": -360,
    "CST6CDT": -360,
    "CTT": 480,
    "Canada/Atlantic": -240,
    "Canada/Central": -360,
    "Canada/East-Saskatchewan": -360,
    "Canada/Eastern": -300,
    "Canada/Mountain": -420,
    "Canada/Newfoundland": -210,
    "Canada/Pacific": -480,
    "Canada/Saskatchewan": -360,
    "Canada/Yukon": -480,
    "Chile/Continental": -240,
    "Chile/EasterIsland": -360,
    "Cuba": -300,
    "EAT": 180,
    "ECT": 60,
    "EET": 120,
    "EST": -300,
    "EST5EDT": -300,
    "Egypt": 120,
    "Eire": 0,
    "Etc/GMT": 0,
    "Etc/GMT+0": 0,
    "Etc/GMT+1": -60,
    "Etc/GMT+10": -600,
    "Etc/GMT+11": -660,
    "Etc/GMT+12": -720,
    "Etc/GMT+2": -120,
    "Etc/GMT+3": -180,
    "Etc/GMT+4": -240,
    "Etc/GMT+5": -300,
    "Etc/GMT+6": -360,
    "Etc/GMT+7": -420,
    "Etc/GMT+8": -480,
    "Etc/GMT+9": -540,
    "Etc/GMT-0": 0,
    "Etc/GMT-1": 60,
    "Etc/GMT-10": 600,
    "Etc/GMT-11": 660,
    "Etc/GMT-12": 720,
    "Etc/GMT-13": 780,
    "Etc/GMT-14": 840,
    "Etc/GMT-2": 120,
    "Etc/GMT-3": 180,
    "Etc/GMT-4": 240,
    "Etc/GMT-5": 300,
    "Etc/GMT-6": 360,
    "Etc/GMT-7": 420,
    "Etc/GMT-8": 480,
    "Etc/GMT-9": 540,
    "Etc/GMT0": 0,
    "Etc/Greenwich": 0,
    "Etc/UCT": 0,
    "Etc/UTC": 0,
    "Etc/Universal": 0,
    "Etc/Zulu": 0,
    "Europe/Amsterdam": 60,
    "Europe/Andorra": 60,
    "Europe/Athens": 120,
    "Europe/Belfast": 0,
    "Europe/Belgrade": 60,
    "Europe/Berlin": 60,
    "Europe/Bratislava": 60,
    "Europe/Brussels": 60,
    "Europe/Bucharest": 120,
    "Europe/Budapest": 60,
    "Europe/Chisinau": 120,
    "Europe/Copenhagen": 60,
    "Europe/Dublin": 0,
    "Europe/Gibraltar": 60,
    "Europe/Guernsey": 0,
    "Europe/Helsinki": 120,
    "Europe/Isle_of_Man": 0,
    "Europe/Istanbul": 120,
    "Europe/Jersey": 0,
    "Europe/Kaliningrad": 120,
    "Europe/Kiev": 120,
    "Europe/Lisbon": 0,
    "Europe/Ljubljana": 60,
    "Europe/London": 0,
    "Europe/Luxembourg": 60,
    "Europe/Madrid": 60,
    "Europe/Malta": 60,
    "Europe/Mariehamn": 120,
    "Europe/Minsk": 120,
    "Europe/Monaco": 60,
    "Europe/Moscow": 180,
    "Europe/Nicosia": 120,
    "Europe/Oslo": 60,
    "Europe/Paris": 60,
    "Europe/Podgorica": 60,
    "Europe/Prague": 60,
    "Europe/Riga": 120,
    "Europe/Rome": 60,
    "Europe/Samara": 240,
    "Europe/San_Marino": 60,
    "Europe/Sarajevo": 60,
    "Europe/Simferopol": 120,
    "Europe/Skopje": 60,
    "Europe/Sofia": 120,
    "Europe/Stockholm": 60,
    "Europe/Tallinn": 120,
    "Europe/Tirane": 60,
    "Europe/Tiraspol": 120,
    "Europe/Uzhgorod": 120,
    "Europe/Vaduz": 60,
    "Europe/Vatican": 60,
    "Europe/Vienna": 60,
    "Europe/Vilnius": 120,
    "Europe/Volgograd": 180,
    "Europe/Warsaw": 60,
    "Europe/Zagreb": 60,
    "Europe/Zaporozhye": 120,
    "Europe/Zurich": 60,
    "GB": 0,
    "GB-Eire": 0,
    "GMT": 0,
    "GMT0": 0,
    "Greenwich": 0,
    "HST": -600,
    "Hongkong": 480,
    "IET": -300,
    "IST": 330,
    "Iceland": 0,
    "Indian/Antananarivo": 180,
    "Indian/Chagos": 360,
    "Indian/Christmas": 420,
    "Indian/Cocos": 390,
    "Indian/Comoro": 180,
    "Indian/Kerguelen": 300,
    "Indian/Mahe": 240,
    "Indian/Maldives": 300,
    "Indian/Mauritius": 240,
    "Indian/Mayotte": 180,
    "Indian/Reunion": 240,
    "Iran": 210,
    "Israel": 120,
    "JST": 540,
    "Jamaica": -300,
    "Japan": 540,
    "Kwajalein": 720,
    "Libya": 120,
    "MET": 60,
    "MIT": -660,
    "MST": -420,
    "MST7MDT": -420,
    "Mexico/BajaNorte": -480,
    "Mexico/BajaSur": -420,
    "Mexico/General": -360,
    "Mideast/Riyadh87": 187,
    "Mideast/Riyadh88": 187,
    "Mideast/Riyadh89": 187,
    "NET": 240,
    "NST": 720,
    "NZ": 720,
    "NZ-CHAT": 765,
    "Navajo": -420,
    "PLT": 300,
    "PNT": -420,
    "PRC": 480,
    "PRT": -240,
    "PST": -480,
    "PST8PDT": -480,
    "Pacific/Apia": -660,
    "Pacific/Auckland": 720,
    "Pacific/Chatham": 765,
    "Pacific/Easter": -360,
    "Pacific/Efate": 660,
    "Pacific/Enderbury": 780,
    "Pacific/Fakaofo": -600,
    "Pacific/Fiji": 720,
    "Pacific/Funafuti": 720,
    "Pacific/Galapagos": -360,
    "Pacific/Gambier": -540,
    "Pacific/Guadalcanal": 660,
    "Pacific/Guam": 600,
    "Pacific/Honolulu": -600,
    "Pacific/Johnston": -600,
    "Pacific/Kiritimati": 840,
    "Pacific/Kosrae": 660,
    "Pacific/Kwajalein": 720,
    "Pacific/Majuro": 720,
    "Pacific/Marquesas": -570,
    "Pacific/Midway": -660,
    "Pacific/Nauru": 720,
    "Pacific/Niue": -660,
    "Pacific/Norfolk": 690,
    "Pacific/Noumea": 660,
    "Pacific/Pago_Pago": -660,
    "Pacific/Palau": 540,
    "Pacific/Pitcairn": -480,
    "Pacific/Ponape": 660,
    "Pacific/Port_Moresby": 600,
    "Pacific/Rarotonga": -600,
    "Pacific/Saipan": 600,
    "Pacific/Samoa": -660,
    "Pacific/Tahiti": -600,
    "Pacific/Tarawa": 720,
    "Pacific/Tongatapu": 780,
    "Pacific/Truk": 600,
    "Pacific/Wake": 720,
    "Pacific/Wallis": 720,
    "Pacific/Yap": 600,
    "Poland": 60,
    "Portugal": 0,
    "ROK": 540,
    "SST": 660,
    "Singapore": 480,
    "SystemV/AST4": -240,
    "SystemV/AST4ADT": -240,
    "SystemV/CST6": -360,
    "SystemV/CST6CDT": -360,
    "SystemV/EST5": -300,
    "SystemV/EST5EDT": -300,
    "SystemV/HST10": -600,
    "SystemV/MST7": -420,
    "SystemV/MST7MDT": -420,
    "SystemV/PST8": -480,
    "SystemV/PST8PDT": -480,
    "SystemV/YST9": -540,
    "SystemV/YST9YDT": -540,
    "Turkey": 120,
    "UCT": 0,
    "US/Alaska": -540,
    "US/Aleutian": -600,
    "US/Arizona": -420,
    "US/Central": -360,
    "US/East-Indiana": -300,
    "US/Eastern": -300,
    "US/Hawaii": -600,
    "US/Indiana-Starke": -360,
    "US/Michigan": -300,
    "US/Mountain": -420,
    "US/Pacific": -480,
    "US/Pacific-New": -480,
    "US/Samoa": -660,
    "UTC": 0,
    "Universal": 0,
    "VST": 420,
    "W-SU": 180,
    "WET": 0,
    "Zulu": 0
  },

  /**
   * Returns the timezone offset in minutes from UTC
   */
  getOffset: function(timezone) {
    return offsets[timezone] || 0;
  },

  getOffsetAsString: function(timezone) {
    return this.formatOffset(this.getOffset(timezone));    
  },

  formatOffset: function(offsetMinutes) {
    var hours = Math.abs(offsetMinutes / 60);
    var minutes = Math.abs(offsetMinutes % 60);
    var offset = '';
    if (minutesRaw >= 0) {
      offset += '+';
    } else {
      offset += '-';
    }
    if (hours < 10) {
      offset += '0';
    }
    offset += hours;
    if (minutes < 10) {
      offset += '0';
    }
    offset += minutes;
    return offset;
  }
}