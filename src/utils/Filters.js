function byParams(filters) {
    let query = { status: new RegExp('w', 'i') };
    let locationFilter = [];
    if (filters) {
        if (filters.status) {
            query.status = new RegExp(filters.status, 'i');
        }

        if (filters.importance) {
            query.importance = new RegExp(filters.importance, 'i');
        }

        if (filters.location) {
            locationFilter = [
                { 'street': new RegExp(filters.location, 'i') },
                { 'city': new RegExp(filters.location, 'i') }
            ]
        }
    }
    const pipeline = [{ '$match': query }]
    if (locationFilter.length > 0) {
        pipeline.push({ '$match': { '$or': locationFilter } });
    }
    pipeline.push({
        '$project': {
            'contactNumber': 0,
            'volunteerId': 0
        }
    });
    return pipeline;
}

function byId(id) {
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    return pipeline;
}

export { byParams, byId }
