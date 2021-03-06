'use strict';

angular.module('countrySelect', []).service('countries', function(){
	var service = this;
	service.countries = [
		{ code: "af", name: "Afghanistan" },
		{ code: "ax", name: "Åland Islands" },
		{ code: "al", name: "Albania" },
		{ code: "dz", name: "Algeria" },
		{ code: "as", name: "American Samoa" },
		{ code: "ad", name: "Andorra" },
		{ code: "ao", name: "Angola" },
		{ code: "ai", name: "Anguilla" },
		{ code: "aq", name: "Antarctica" },
		{ code: "ag", name: "Antigua and Barbuda" },
		{ code: "ar", name: "Argentina" },
		{ code: "am", name: "Armenia" },
		{ code: "aw", name: "Aruba" },
		{ code: "au", name: "Australia" },
		{ code: "at", name: "Austria" },
		{ code: "az", name: "Azerbaijan" },
		{ code: "bs", name: "Bahamas" },
		{ code: "bh", name: "Bahrain" },
		{ code: "bd", name: "Bangladesh" },
		{ code: "bb", name: "Barbados" },
		{ code: "by", name: "Belarus" },
		{ code: "be", name: "Belgium" },
		{ code: "bz", name: "Belize" },
		{ code: "bj", name: "Benin" },
		{ code: "bm", name: "Bermuda" },
		{ code: "bt", name: "Bhutan" },
		{ code: "bo", name: "Bolivia, Plurinational State of" },
		{ code: "bq", name: "Bonaire, Sint Eustatius and Saba" },
		{ code: "ba", name: "Bosnia and Herzegovina" },
		{ code: "bw", name: "Botswana" },
		{ code: "bv", name: "Bouvet Island" },
		{ code: "br", name: "Brazil" },
		{ code: "io", name: "British Indian Ocean Territory" },
		{ code: "bn", name: "Brunei Darussalam" },
		{ code: "bg", name: "Bulgaria" },
		{ code: "bf", name: "Burkina Faso" },
		{ code: "bi", name: "Burundi" },
		{ code: "kh", name: "Cambodia" },
		{ code: "cm", name: "Cameroon" },
		{ code: "ca", name: "Canada" },
		{ code: "cv", name: "Cape Verde" },
		{ code: "ky", name: "Cayman Islands" },
		{ code: "cf", name: "Central African Republic" },
		{ code: "td", name: "Chad" },
		{ code: "cl", name: "Chile" },
		{ code: "cn", name: "China" },
		{ code: "cx", name: "Christmas Island" },
		{ code: "cc", name: "Cocos (Keeling) Islands" },
		{ code: "co", name: "Colombia" },
		{ code: "km", name: "Comoros" },
		{ code: "cg", name: "Congo" },
		{ code: "cd", name: "Congo, the Democratic Republic of the" },
		{ code: "ck", name: "Cook Islands" },
		{ code: "cr", name: "Costa Rica" },
		{ code: "ci", name: "Côte d'Ivoire" },
		{ code: "hr", name: "Croatia" },
		{ code: "cu", name: "Cuba" },
		{ code: "cw", name: "Curaçao" },
		{ code: "cy", name: "Cyprus" },
		{ code: "cz", name: "Czech Republic" },
		{ code: "dk", name: "Denmark" },
		{ code: "dj", name: "Djibouti" },
		{ code: "dm", name: "Dominica" },
		{ code: "do", name: "Dominican Republic" },
		{ code: "ec", name: "Ecuador" },
		{ code: "eg", name: "Egypt" },
		{ code: "sv", name: "El Salvador" },
		{ code: "gq", name: "Equatorial Guinea" },
		{ code: "er", name: "Eritrea" },
		{ code: "ee", name: "Estonia" },
		{ code: "et", name: "Ethiopia" },
		{ code: "fk", name: "Falkland Islands (Malvinas)" },
		{ code: "fo", name: "Faroe Islands" },
		{ code: "fj", name: "Fiji" },
		{ code: "fi", name: "Finland" },
		{ code: "fr", name: "France" },
		{ code: "gf", name: "French Guiana" },
		{ code: "pf", name: "French Polynesia" },
		{ code: "tf", name: "French Southern Territories" },
		{ code: "ga", name: "Gabon" },
		{ code: "gm", name: "Gambia" },
		{ code: "ge", name: "Georgia" },
		{ code: "de", name: "Germany" },
		{ code: "gh", name: "Ghana" },
		{ code: "gi", name: "Gibraltar" },
		{ code: "gr", name: "Greece" },
		{ code: "gl", name: "Greenland" },
		{ code: "gd", name: "Grenada" },
		{ code: "gp", name: "Guadeloupe" },
		{ code: "gu", name: "Guam" },
		{ code: "gt", name: "Guatemala" },
		{ code: "gg", name: "Guernsey" },
		{ code: "gn", name: "Guinea" },
		{ code: "gw", name: "Guinea-Bissau" },
		{ code: "gy", name: "Guyana" },
		{ code: "ht", name: "Haiti" },
		{ code: "hm", name: "Heard Island and McDonald Islands" },
		{ code: "va", name: "Holy See (Vatican City State)" },
		{ code: "hn", name: "Honduras" },
		{ code: "hk", name: "Hong Kong" },
		{ code: "hu", name: "Hungary" },
		{ code: "is", name: "Iceland" },
		{ code: "in", name: "India" },
		{ code: "id", name: "Indonesia" },
		{ code: "ir", name: "Iran, Islamic Republic of" },
		{ code: "iq", name: "Iraq" },
		{ code: "ie", name: "Ireland" },
		{ code: "im", name: "Isle of Man" },
		{ code: "il", name: "Israel" },
		{ code: "it", name: "Italy" },
		{ code: "jm", name: "Jamaica" },
		{ code: "jp", name: "Japan" },
		{ code: "je", name: "Jersey" },
		{ code: "jo", name: "Jordan" },
		{ code: "kz", name: "Kazakhstan" },
		{ code: "ke", name: "Kenya" },
		{ code: "ki", name: "Kiribati" },
		{ code: "kp", name: "Korea, Democratic People's Republic of" },
		{ code: "kr", name: "Korea, Republic of" },
		{ code: "kw", name: "Kuwait" },
		{ code: "kg", name: "Kyrgyzstan" },
		{ code: "la", name: "Lao People's Democratic Republic" },
		{ code: "lv", name: "Latvia" },
		{ code: "lb", name: "Lebanon" },
		{ code: "ls", name: "Lesotho" },
		{ code: "lr", name: "Liberia" },
		{ code: "ly", name: "Libya" },
		{ code: "li", name: "Liechtenstein" },
		{ code: "lt", name: "Lithuania" },
		{ code: "lu", name: "Luxembourg" },
		{ code: "mo", name: "Macao" },
		{ code: "mk", name: "Macedonia, the former Yugoslav Republic of" },
		{ code: "mg", name: "Madagascar" },
		{ code: "mw", name: "Malawi" },
		{ code: "my", name: "Malaysia" },
		{ code: "mv", name: "Maldives" },
		{ code: "ml", name: "Mali" },
		{ code: "mt", name: "Malta" },
		{ code: "mh", name: "Marshall Islands" },
		{ code: "mq", name: "Martinique" },
		{ code: "mr", name: "Mauritania" },
		{ code: "mu", name: "Mauritius" },
		{ code: "yt", name: "Mayotte" },
		{ code: "mx", name: "Mexico" },
		{ code: "fm", name: "Micronesia, Federated States of" },
		{ code: "md", name: "Moldova, Republic of" },
		{ code: "mc", name: "Monaco" },
		{ code: "mn", name: "Mongolia" },
		{ code: "me", name: "Montenegro" },
		{ code: "ms", name: "Montserrat" },
		{ code: "ma", name: "Morocco" },
		{ code: "mz", name: "Mozambique" },
		{ code: "mm", name: "Myanmar" },
		{ code: "na", name: "Namibia" },
		{ code: "nr", name: "Nauru" },
		{ code: "np", name: "Nepal" },
		{ code: "nl", name: "Netherlands" },
		{ code: "nc", name: "New Caledonia" },
		{ code: "nz", name: "New Zealand" },
		{ code: "ni", name: "Nicaragua" },
		{ code: "ne", name: "Niger" },
		{ code: "ng", name: "Nigeria" },
		{ code: "nu", name: "Niue" },
		{ code: "nf", name: "Norfolk Island" },
		{ code: "mp", name: "Northern Mariana Islands" },
		{ code: "no", name: "Norway" },
		{ code: "om", name: "Oman" },
		{ code: "pk", name: "Pakistan" },
		{ code: "pw", name: "Palau" },
		{ code: "ps", name: "Palestine, State of" },
		{ code: "pa", name: "Panama" },
		{ code: "pg", name: "Papua New Guinea" },
		{ code: "py", name: "Paraguay" },
		{ code: "pe", name: "Peru" },
		{ code: "ph", name: "Philippines" },
		{ code: "pn", name: "Pitcairn" },
		{ code: "pl", name: "Poland" },
		{ code: "pt", name: "Portugal" },
		{ code: "pr", name: "Puerto Rico" },
		{ code: "qa", name: "Qatar" },
		{ code: "re", name: "Réunion" },
		{ code: "ro", name: "Romania" },
		{ code: "ru", name: "Russian Federation" },
		{ code: "rw", name: "Rwanda" },
		{ code: "bl", name: "Saint Barthélemy" },
		{ code: "sh", name: "Saint Helena, Ascension and Tristan da Cunha" },
		{ code: "kn", name: "Saint Kitts and Nevis" },
		{ code: "lc", name: "Saint Lucia" },
		{ code: "mf", name: "Saint Martin (French part)" },
		{ code: "pm", name: "Saint Pierre and Miquelon" },
		{ code: "vc", name: "Saint Vincent and the Grenadines" },
		{ code: "ws", name: "Samoa" },
		{ code: "sm", name: "San Marino" },
		{ code: "st", name: "Sao Tome and Principe" },
		{ code: "sa", name: "Saudi Arabia" },
		{ code: "sn", name: "Senegal" },
		{ code: "rs", name: "Serbia" },
		{ code: "sc", name: "Seychelles" },
		{ code: "sl", name: "Sierra Leone" },
		{ code: "sg", name: "Singapore" },
		{ code: "sx", name: "Sint Maarten (Dutch part)" },
		{ code: "sk", name: "Slovakia" },
		{ code: "si", name: "Slovenia" },
		{ code: "sb", name: "Solomon Islands" },
		{ code: "so", name: "Somalia" },
		{ code: "za", name: "South Africa" },
		{ code: "gs", name: "South Georgia and the South Sandwich Islands" },
		{ code: "ss", name: "South Sudan" },
		{ code: "es", name: "Spain" },
		{ code: "lk", name: "Sri Lanka" },
		{ code: "sd", name: "Sudan" },
		{ code: "sr", name: "Suriname" },
		{ code: "sj", name: "Svalbard and Jan Mayen" },
		{ code: "sz", name: "Swaziland" },
		{ code: "se", name: "Sweden" },
		{ code: "ch", name: "Switzerland" },
		{ code: "sy", name: "Syrian Arab Republic" },
		{ code: "tw", name: "Taiwan, Province of China" },
		{ code: "tj", name: "Tajikistan" },
		{ code: "tz", name: "Tanzania, United Republic of" },
		{ code: "th", name: "Thailand" },
		{ code: "tl", name: "Timor-Leste" },
		{ code: "tg", name: "Togo" },
		{ code: "tk", name: "Tokelau" },
		{ code: "to", name: "Tonga" },
		{ code: "tt", name: "Trinidad and Tobago" },
		{ code: "tn", name: "Tunisia" },
		{ code: "tr", name: "Turkey" },
		{ code: "tm", name: "Turkmenistan" },
		{ code: "tc", name: "Turks and Caicos Islands" },
		{ code: "tv", name: "Tuvalu" },
		{ code: "ug", name: "Uganda" },
		{ code: "ua", name: "Ukraine" },
		{ code: "ae", name: "United Arab Emirates" },
		{ code: "gb", name: "United Kingdom" },
		{ code: "us", name: "United States" },
		{ code: "um", name: "United States Minor Outlying Islands" },
		{ code: "uy", name: "Uruguay" },
		{ code: "uz", name: "Uzbekistan" },
		{ code: "vu", name: "Vanuatu" },
		{ code: "ve", name: "Venezuela, Bolivarian Republic of" },
		{ code: "vn", name: "Viet Nam" },
		{ code: "vg", name: "Virgin Islands, British" },
		{ code: "vi", name: "Virgin Islands, U.S." },
		{ code: "wf", name: "Wallis and Futuna" },
		{ code: "eh", name: "Western Sahara" },
		{ code: "ye", name: "Yemen" },
		{ code: "zm", name: "Zambia" },
		{ code: "zw", name: "Zimbabwe"}
	];
	service.getCountryName = function(code){
		var filtered_country = service.countries.filter(function(country_data) {
			return country_data.code == code;
		})[0];
		if (filtered_country){
			return filtered_country.name;
		} else {
			return '';
		}
	}

	return
}).directive('countrySelect', function(countries) {

	var countries = countries.countries;


	return {
		template: '<select ng-value="ngModel" ng-options="c.code as c.name for c in countries"><option value=""></option></select>',
		replace: true,
		scope: { ngModel: '=' },

		link: function(scope, elem, attrs) {
			scope.countries = countries;
		}

	}

});

angular.module("countrySelect").service("usStates", function() {
        var service = this;
        service.states = [
                {
                    name: "Alabama",
                    code: "AL"
                },
                {
                    name: "Alaska",
                    code: "AK"
                },
                {
                    name: "American Samoa",
                    code: "AS"
                },
                {
                    name: "Arizona",
                    code: "AZ"
                },
                {
                    name: "Arkansas",
                    code: "AR"
                },
                {
                    name: "California",
                    code: "CA"
                },
                {
                    name: "Colorado",
                    code: "CO"
                },
                {
                    name: "Connecticut",
                    code: "CT"
                },
                {
                    name: "Delaware",
                    code: "DE"
                },
                {
                    name: "District Of Columbia",
                    code: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    code: "FM"
                },
                {
                    name: "Florida",
                    code: "FL"
                },
                {
                    name: "Georgia",
                    code: "GA"
                },
                {
                    name: "Guam",
                    code: "GU"
                },
                {
                    name: "Hawaii",
                    code: "HI"
                },
                {
                    name: "Idaho",
                    code: "ID"
                },
                {
                    name: "Illinois",
                    code: "IL"
                },
                {
                    name: "Indiana",
                    code: "IN"
                },
                {
                    name: "Iowa",
                    code: "IA"
                },
                {
                    name: "Kansas",
                    code: "KS"
                },
                {
                    name: "Kentucky",
                    code: "KY"
                },
                {
                    name: "Louisiana",
                    code: "LA"
                },
                {
                    name: "Maine",
                    code: "ME"
                },
                {
                    name: "Marshall Islands",
                    code: "MH"
                },
                {
                    name: "Maryland",
                    code: "MD"
                },
                {
                    name: "Massachusetts",
                    code: "MA"
                },
                {
                    name: "Michigan",
                    code: "MI"
                },
                {
                    name: "Minnesota",
                    code: "MN"
                },
                {
                    name: "Mississippi",
                    code: "MS"
                },
                {
                    name: "Missouri",
                    code: "MO"
                },
                {
                    name: "Montana",
                    code: "MT"
                },
                {
                    name: "Nebraska",
                    code: "NE"
                },
                {
                    name: "Nevada",
                    code: "NV"
                },
                {
                    name: "New Hampshire",
                    code: "NH"
                },
                {
                    name: "New Jersey",
                    code: "NJ"
                },
                {
                    name: "New Mexico",
                    code: "NM"
                },
                {
                    name: "New York",
                    code: "NY"
                },
                {
                    name: "North Carolina",
                    code: "NC"
                },
                {
                    name: "North Dakota",
                    code: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    code: "MP"
                },
                {
                    name: "Ohio",
                    code: "OH"
                },
                {
                    name: "Oklahoma",
                    code: "OK"
                },
                {
                    name: "Oregon",
                    code: "OR"
                },
                {
                    name: "Palau",
                    code: "PW"
                },
                {
                    name: "Pennsylvania",
                    code: "PA"
                },
                {
                    name: "Puerto Rico",
                    code: "PR"
                },
                {
                    name: "Rhode Island",
                    code: "RI"
                },
                {
                    name: "South Carolina",
                    code: "SC"
                },
                {
                    name: "South Dakota",
                    code: "SD"
                },
                {
                    name: "Tennessee",
                    code: "TN"
                },
                {
                    name: "Texas",
                    code: "TX"
                },
                {
                    name: "Utah",
                    code: "UT"
                },
                {
                    name: "Vermont",
                    code: "VT"
                },
                {
                    name: "Virgin Islands",
                    code: "VI"
                },
                {
                    name: "Virginia",
                    code: "VA"
                },
                {
                    name: "Washington",
                    code: "WA"
                },
                {
                    name: "West Virginia",
                    code: "WV"
                },
                {
                    name: "Wisconsin",
                    code: "WI"
                },
                {
                    name: "Wyoming",
                    code: "WY"
                }
            ]

        service.getStateName = function(code){
		var filtered_state = service.usStates.filter(function(state_data) {
			return state.code == code;
		})[0];
		if (filtered_state){
			return filtered_state.name;
		} else {
			return '';
		}
	}
}).directive("usStateSelect", function(usStates){

  var states = usStates.states;

	return {
		template: '<select ng-value="ngModel" ng-options="s.code as s.name for s in states"><option value=""></option></select>',
		replace: true,
		scope: { ngModel: '=' },

		link: function(scope, elem, attrs) {
			scope.states = states;
		}

	}
});

angular.module("countrySelect").service("caProvinces", function() {
        var service = this;

        service.provincies = [
            { code:"AB", name:"Alberta" },
            { code:"BC", name:"British Columbia" },
            { code:"MB", name:"Manitoba" },
            { code:"NB", name:"New Brunswick" },
            { code:"NL", name:"Newfoundland and Labrador" },
            { code:"NS", name:"Nova Scotia" },
            { code:"NU", name:"Nunavut" },
            { code:"NW", name:"Northwest Territories" },
            { code:"ON", name:"Ontario","country":"CA" },
            { code:"PE", name:"Prince Edward Island" },
            { code:"QC", name:"Quebec" },
            { code:"SK", name:"Saskatchewan" },
            { code:"YU", name:"Yukon" }
        ]

        return
}).directive("caProvinceSelect", function(caProvinces) {

  var provincies = caProvinces.provincies;

	return {
		template: '<select ng-value="ngModel" ng-options="p.code as p.name for p in provincies"><option value=""></option></select>',
		replace: true,
		scope: { ngModel: '=' },

		link: function(scope, elem, attrs) {
			scope.provincies = provincies;
		}

	}
});
