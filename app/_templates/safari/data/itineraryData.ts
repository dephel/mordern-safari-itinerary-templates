// Itinerary data for The Best of Italy - The West Family
export interface DayActivity {
  type:
    | 'flight'
    | 'transfer'
    | 'checkin'
    | 'checkout'
    | 'activity'
    | 'restaurant'
    | 'overnight';
  icon?: string;
  title: string;
  time?: string;
  details?: string;
  details2?: string;
  moreDetails?: {
    overview?: string;
    items?: string[];
    images?: string[];
    highlights?: string[];
    quickFacts?: string[];
    accommodation?: {
      name: string;
      description: string;
      images?: string[];
    };
    link?: { label: string; url: string };
  };
  checkpoints?: string[];
  confirmationNumber?: string;
  website?: string;
  nights?: number;
  roomType?: string;
}

export interface Day {
  dayNumber: number;
  dayName: string;
  date: string;
  dateShort: string;
  leftImage: string;
  activities: DayActivity[];
}

export const itineraryData = {
  title: 'The Best of Italy',
  subtitle: 'Prepared for The West Family',
  dates: 'July 2024',
  coverImage: 'https://itineraries.safariportal.app/api/assets/74302/full',
  days: [
    {
      dayNumber: 1,
      dayName: 'Friday',
      date: 'Friday \u00b7 July 19, 2024',
      dateShort: 'July 19, 2024',
      leftImage: 'https://itineraries.safariportal.app/api/assets/75159/full',
      activities: [
        {
          type: 'flight' as const,
          title: 'Flight from New York to Rome',
          time: '4:40 PM \u00b7 Depart New York (John F. Kennedy International Airport)',
          details: 'Delta Air Lines Flight DL 182',
          checkpoints: ['PNR 83768237', 'Rachel - Seat 1A', 'Phil - Seat 1B'],
          moreDetails: {
            overview: '',
            items: [
              'You are able to pack two checked bags weighing less than 50 lbs each.',
              'BUT, because of the restrictions on the internal regional flights, you should only pack one bag weighing not more than 33 lbs inclusive of any hand luggage.',
              'You can expect a spacious cabin and the seat converts into a flat bed.',
            ],
            images: [
              'https://itineraries.safariportal.app/api/assets/376492/full',
              'https://itineraries.safariportal.app/api/assets/74616/full',
            ],
          },
        },
      ],
    },
    {
      dayNumber: 2,
      dayName: 'Saturday',
      date: 'Saturday \u00b7 July 20, 2024',
      dateShort: 'July 20, 2024',
      leftImage: 'https://itineraries.safariportal.app/api/assets/549478/full',
      activities: [
        {
          type: 'flight' as const,
          title: 'Flight from New York to Rome',
          time: '7:30 AM \u00b7 Arrive Rome (Leonardo da Vinci-Fiumicino Airport)',
        },
        {
          type: 'transfer' as const,
          title: 'Transfer from Rome airport to your hotel',
          checkpoints: [
            '8:30 AM \u00b7 Depart Rome airport',
            'Transfer Duration: 1 hour',
            '9:30 AM \u00b7 Arrive your hotel',
          ],
          details: 'Contact Information: Pietro +39 486 555 1234',
        },
        {
          type: 'checkin' as const,
          title: 'Check in at Hotel Eden Rome, Dorchester Collection',
          time: '9:30 AM \u00b7 Check In',
          roomType: 'Penthouse x 1 (Breakfast Included)',
          nights: 3,
          moreDetails: {
            overview: 'Property Overview',
            items: [
              "Located in the heart of Rome, Dorchester Collection's Hotel Eden is just a short stroll from the legendary Spanish Steps and picturesque Villa Borghese. This elegant city oasis dates back to 1889 and throughout its illustrious history has welcomed royalty, dignitaries, and numerous celebrities. Hotel Eden offers 98 rooms and suites with an exquisite design blending contemporary features with the authentic Roman style of the property.",
              'To know Hotel Eden is to know the city she inhabits. The history, the traditions, the cuisine, the design. Timeless details in a timeless city.',
            ],
            images: [
              'https://itineraries.safariportal.app/api/assets/74299/full',
              'https://itineraries.safariportal.app/api/assets/43954/full',
              'https://itineraries.safariportal.app/api/assets/78079/full',
              'https://itineraries.safariportal.app/api/assets/74305/full',
              'https://itineraries.safariportal.app/api/assets/74333/full',
            ],
            highlights: [
              'Central location close to all main attractions',
              'The top floor hosts the Michelin-starred restaurant La Terrazza, the relaxed Il Giardino Ristorante, and the vibrant Il Giardino Bar, all providing panoramic views of the skyline',
            ],
            quickFacts: [
              '98 rooms and suites',
              'Spa',
              'Fitness center',
              'Restaurant',
              'Bar',
              'Soundproof rooms',
              'Babysitting',
              'Landmark views',
              'Wifi',
            ],
          },
        },
      ],
    },
    {
      dayNumber: 3,
      dayName: 'Sunday',
      date: 'Sunday \u00b7 July 21, 2024',
      dateShort: 'July 21, 2024',
      leftImage: 'https://itineraries.safariportal.app/api/assets/75162/full',
      activities: [
        {
          type: 'activity' as const,
          title: 'Private Tour of the Vatican',
          checkpoints: [
            'Half Day Activity',
            '9:00 AM \u00b7 Start Time',
            '12:00 PM \u00b7 End Time',
          ],
          details2: 'Meet in the lobby at 9am for your private tour.',
          moreDetails: {
            overview: 'Activity overview',
            items: [
              "A few facts about Vatican City: It is the smallest country in the world. There are officially 600 citizens of Vatican City and most of them don't live there. Vatican City didn't officially exist until Mussolini signed the Lateran Pact in 1929, thus creating a sovereign state. St. Peter's Basilica, one of the largest churches on the planet, was built upon the site where Peter was crucified, an ancient necropolis (Peter's bones are still there and can be seen if you book a special tour). The clownishly dressed Swiss Guards' outfits were inspired by the work of Raphael.",
              "Today a visit to the Vatican is nearly obligatory for tourists in Rome - and not just because of the facts above but because of the glory that is St. Peter's Square, as well as the stunning Vatican Museums, which contain one of the best collections of art on the planet.",
            ],
            images: [
              'https://itineraries.safariportal.app/api/assets/74621/full',
              'https://itineraries.safariportal.app/api/assets/75160/full',
            ],
          },
        },
        {
          type: 'restaurant' as const,
          title: 'Restaurant Reservation',
          time: '7:30 PM \u00b7 Start Time',
          website: 'https://www.feliceatestaccio.com/',
          moreDetails: {
            items: [
              "Testaccio is widely considered the best neighbourhood for Roman cuisine, and this eatery is its unrivalled star. With retro checkered floors, white tablecloths, and a tantalizing array of traditional dishes, the old-school restaurant makes a perfect leisurely weekend lunch with family or a romantic choice for a gourmet dinner. Cacio e pepe is Felice a Testaccio's signature dish; this tangle of spaghetti, melted cheese and black pepper comes freshly tossed at the table for you.",
            ],
          },
        },
        {
          type: 'overnight' as const,
          title: 'Overnight at Hotel Eden Rome, Dorchester Collection',
          roomType: 'Penthouse x 1 (Breakfast Included)',
        },
      ],
    },
    {
      dayNumber: 4,
      dayName: 'Monday',
      date: 'Monday \u00b7 July 22, 2024',
      dateShort: 'July 22, 2024',
      leftImage: 'https://itineraries.safariportal.app/api/assets/162600/full',
      activities: [
        {
          type: 'activity' as const,
          title: 'Tour Of The Spanish Steps',
          time: '10:00 AM \u00b7 Start Time',
          details: 'Contact Information: +39 579 493879',
          details2: 'Meet Giuseppe at 10am in the lobby of the hotel.',
          moreDetails: {
            overview: 'Activity overview',
            items: [
              'The Spanish Steps (Italian: Scalinata di Trinit\u00e0 dei Monti) are a set of steps in Rome, Italy, climbing a steep slope between the Piazza di Spagna at the base and Piazza Trinit\u00e0 dei Monti, dominated by the Trinit\u00e0 dei Monti church at the top.',
              "The monumental stairway of 135 steps was built with French diplomat \u00c9tienne Gueffier's bequeathed funds of 20,000 scudi, in 1723\u20131725, linking the Trinit\u00e0 dei Monti church that was under the patronage of the Bourbon kings of France and the Bourbon Spanish Embassy at the top of the steps to the Holy See in the Palazzo Monaldeschi at the bottom of the steps. The stairway was designed by architects Francesco de Sanctis and Alessandro Specchi.",
            ],
          },
        },
        {
          type: 'activity' as const,
          title: 'The day is yours!',
          details: 'Full Day Activity',
          details2: 'You have the day to explore!',
          moreDetails: {
            items: ['Today you enjoy a day at leisure!'],
          },
        },
        {
          type: 'overnight' as const,
          title: 'Overnight at Hotel Eden Rome, Dorchester Collection',
          roomType: 'Penthouse x 1 (Breakfast Included)',
        },
      ],
    },
    {
      dayNumber: 5,
      dayName: 'Tuesday',
      date: 'Tuesday \u00b7 July 23, 2024',
      dateShort: 'July 23, 2024',
      leftImage: 'https://itineraries.safariportal.app/api/assets/343735/full',
      activities: [
        {
          type: 'checkout' as const,
          title: 'Check out from Hotel Eden Rome, Dorchester Collection',
          time: '9:00 AM \u00b7 Check Out',
        },
        {
          type: 'transfer' as const,
          title: 'Transfer from your hotel to the airport',
          checkpoints: ['Depart your hotel', 'Arrive the airport'],
        },
        {
          type: 'flight' as const,
          title: 'Flight from Rome to Venice',
          checkpoints: [
            '9:50 PM \u00b7 Depart Rome (Leonardo da Vinci-Fiumicino Airport)',
            'ITA Airways Flight AZ 1473',
            '10:55 PM \u00b7 Arrive Venice (Venice Marco Polo Airport)',
          ],
        },
        {
          type: 'transfer' as const,
          title: 'Transfer from airport to your hotel',
          checkpoints: ['Depart airport', 'Arrive your hotel'],
        },
        {
          type: 'checkin' as const,
          title: 'Check in at Cipriani',
          time: '10:00 AM \u00b7 Check In',
          roomType: 'Double Rooms x 2 (Breakfast Included)',
          nights: 2,
          confirmationNumber: '4984398',
          website:
            'https://www.belmond.com/hotels/europe/italy/venice/belmond-hotel-cipriani/',
          moreDetails: {
            overview: 'The most glamorous star in Venice',
            items: [
              "Sporting 270-degree views out across the water, stay at Hotel Cipriani and enjoy vistas spanning the Doge's Palace to the church of St Giorgio and the islands beyond. As one of the most celebrated luxury hotels in Venice, Italy, every inch of this iconic hideaway is guaranteed to enchant. Exquisite antiques and local artifacts whisk you back in time, while Michelin-starred gastronomy, charming staff, and the only Olympic-sized swimming pool in the city offer modern sophistication.",
              'Check in to one of the premier luxury hotels in Venice for mesmerising lagoon vistas, or select the adjoining 15th-century Palazzo Vendramin. Rooms are light and fresh, combining Venetian elegance with modern glamour. Recline on king sized beds, then unwind in a marble bathroom fit for royalty. All suites boast private balconies or terraces to coax you outside. Start your day here over a Venetian breakfast\u2013\u2013the views will never leave you.',
            ],
            images: [
              'https://itineraries.safariportal.app/api/assets/75163/full',
              'https://itineraries.safariportal.app/api/assets/74299/full',
              'https://itineraries.safariportal.app/api/assets/43954/full',
            ],
            highlights: [
              'Exclusive tours to rarely seen parts of the lagoon',
              'The only Olympic-sized swimming pool in the city',
              'Michelin-stay fine dining',
              '270-degree views out across the water',
            ],
            quickFacts: [
              'Located 16 km from Marco Polo airport',
              '96 rooms and suites',
              'Daily bottled water',
              "Shuttle service to St Mark's Square",
              'Daily newspapers',
              'Access to fitness facilities',
              'Daily \u00e0 la carte breakfast',
              'Wellness center',
              "Children's club",
              'Tennis court',
              'Private marina',
              'Wifi',
            ],
            accommodation: {
              name: 'Double Rooms',
              description:
                'Old-world glamour meets modern comfort in these double rooms that blend classic Venetian style with every modern comfort. Step inside and discover generous king-size or twin beds plus enchanting garden or lagoon views and spacious bathrooms.',
              images: [
                'https://itineraries.safariportal.app/api/assets/75163/full',
                'https://itineraries.safariportal.app/api/assets/74299/full',
              ],
            },
          },
        },
        {
          type: 'activity' as const,
          title: 'Gondola Ride In Venice',
          checkpoints: [
            'Half Day Activity',
            '3:00 PM \u00b7 Start Time',
            '5:00 PM \u00b7 End Time',
          ],
          details2:
            "You will meet Gaincarlo at the dock in front of the gelato shoppe on Via Velcro at 3:00pm. Julio's number is +39 487 432 873.",
          moreDetails: {
            overview: 'Activity overview',
            items: [
              "Like taking a photo pretending to hold up the Leaning Tower of Pisa, taking a selfie in front of the Mona Lisa, and walking through Times Square, there are some things you just have to do. One of those things is taking a gondola ride in Venice. It's iconic, it's fun, and it's a quintessential travel experience.",
              'The 30-foot (11-meter) narrow boats were once the chief form of transportation in Venice, particularly for the upper classes. Today anyone with a handful of euros can hop in and go for a cruise through the back canals of this most enchanting city. Gondola rides last around 40 minutes and can be extended or a slight increase in the fee. Each boat holds about six people.',
              'Gondoliers are required to wear black pants and a red-and-white striped shirt. Singing gondoliers are more of a product of Hollywood films, but maybe if you ask your gondolier nicely, he might belt out a few notes.',
            ],
            images: [
              'https://itineraries.safariportal.app/api/assets/74616/full',
            ],
          },
        },
        {
          type: 'restaurant' as const,
          title: 'Dinner Reservation at Trattoria Antiche Carampane',
          time: '8:00 PM \u00b7 Start Time',
          details2:
            'This is a lovely 25 minute leisurely walk from your hotel.',
          moreDetails: {
            items: [
              'Dinner is on your own account tonight.',
              'You can review the menu here: https://www.antichecarampane.com/pdf/uploaded/Menu_qr_code_ingl1.pdf',
              "This is one of our favorite restaurants and we highly recommend any seafood dish there! You can't go wrong!",
              'The restaurant is only a 15 minute walk from the hotel, see directions below.',
            ],
          },
        },
      ],
    },
    {
      dayNumber: 6,
      dayName: 'Wednesday',
      date: 'Wednesday \u00b7 July 24, 2024',
      dateShort: 'July 24, 2024',
      leftImage: 'https://itineraries.safariportal.app/api/assets/75162/full',
      activities: [
        {
          type: 'activity' as const,
          title: 'Enjoy the Afternoon At Leisure',
          details: 'Half Day Activity',
        },
        {
          type: 'overnight' as const,
          title: 'Overnight at Cipriani',
          roomType: 'Double Rooms x 2 (Breakfast Included)',
        },
      ],
    },
    {
      dayNumber: 7,
      dayName: 'Thursday',
      date: 'Thursday \u00b7 July 25, 2024',
      dateShort: 'July 25, 2024',
      leftImage: 'https://itineraries.safariportal.app/api/assets/75163/full',
      activities: [
        {
          type: 'checkout' as const,
          title: 'Check out from Cipriani',
        },
        {
          type: 'flight' as const,
          title: 'Flight from Venice to New York',
          checkpoints: [
            '1:35 PM \u00b7 Depart Venice (Venice Marco Polo Airport)',
            'Delta Air Lines Flight DL 289',
            '5:19 PM \u00b7 Arrive New York (John F. Kennedy International Airport)',
          ],
          details: 'PNR 5984697',
        },
        {
          type: 'transfer' as const,
          title: 'Transfer from Cipriani to the airport',
          checkpoints: [
            '11:00 AM \u00b7 Depart Cipriani',
            '11:30 PM \u00b7 Arrive the airport',
          ],
          confirmationNumber: '598547934',
          details: 'Contact Information: +39 567-123-4567',
        },
        {
          type: 'activity' as const,
          title: 'Departure Day',
          moreDetails: {
            overview: 'Time to say "Goodbye"',
            items: [
              'Today you will connect with your international departure flight back home.',
              'We hope to welcome you back to Italy again soon!',
            ],
            images: [
              'https://itineraries.safariportal.app/api/assets/75159/full',
              'https://itineraries.safariportal.app/api/assets/75160/full',
            ],
          },
        },
      ],
    },
  ] as Day[],
};
