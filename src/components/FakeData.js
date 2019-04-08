import faker from 'faker';
var FakeData = [];

for (var i = 0; i < 10; i++) {
  var fakeShow = {
    id: faker.fake('{{random.uuid}}'),
    artist_id: faker.fake('{{random.number}}'),
    url:
      'http://www.bandsintown.com/event/13722599?app_id=foo&artist=Skrillex&came_from=67',
    on_sale_datetime: faker.fake('{{date.future}}'),
    datetime: faker.fake('{{date.future}}'),
    description: 'This is a description',
    venue: {
      name: faker.fake('{{company.companyName}}'),
      latitude: parseInt(faker.fake('{{address.latitude}}')),
      longitude: parseInt(faker.fake('{{address.longitude}}')),
      city: faker.fake('{{address.city}}'),
      region: faker.fake('{{address.stateAbbr}}'),
      country: 'United States',
    },
    offers: [
      {
        type: 'Tickets',
        url:
          'http://www.bandsintown.com/event/13722599/buy_tickets?app_id=foo&artist=Skrillex&came_from=67',
        status: 'available',
      },
    ],
    lineup: ['Sentinels'],
  };
  FakeData.push(fakeShow);
}

export default FakeData;
