const mapData = (data,res) => {
    if (!data) {
        res.status(404).json({
            message: 'No data found',
            status: 'EROOR'
        });
    } else {
        res.status(200).send({
            data,
            message: 'Data found',
            status: 'SUCCESS'
        });
    }
}

const mapError = (error,res) => {
    if (error) {
        res.status(500).json({
            message: 'Error',
            status: 'ERROR'
        });
    }
}

module.exports = {
    mapData,
    mapError
}