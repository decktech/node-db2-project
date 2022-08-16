// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'supra',
        mileage: 50000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1111111111123',
        make: 'toyota',
        model: 'prius',
        mileage: 6000,
        title: 'clean',
    },
    {
        vin: '1111111111234',
        make: 'toyota',
        model: 'corolla',
        mileage: 88000,
        title: 'clean',
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars);
}