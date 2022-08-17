// STRETCH
const cars = [
    {
        vin: 'SAJWA2GEXBMV00832',
        make: 'toyota',
        model: 'supra',
        mileage: 50000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: 'JH4DC4340RS000837',
        make: 'toyota',
        model: 'prius',
        mileage: 6000,
        title: 'clean',
    },
    {
        vin: 'JH4DC4450RS002529',
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