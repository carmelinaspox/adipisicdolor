function getEnvironmentDirection(environment) {
    let direction;

    switch (environment) {
        case 'development':
        case 'testing':
            direction = 'local';
            break;
        case 'production':
            direction = 'remote';
            break;
        default:
            direction = 'unknown'; // Handle unexpected environments
    }

    return direction;
}

// Example usage:
const environment = 'development';
const direction = getEnvironmentDirection(environment);
console.log(`For environment '${environment}', direction is '${direction}'.`);
