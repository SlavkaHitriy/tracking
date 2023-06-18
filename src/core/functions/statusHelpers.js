export const getStatusColor = (code) => {
    switch (code) {
        case 1:
            return 'green.main';
        case 2:
            return 'orange.main';
        case 3:
            return 'primary.main';
        default:
            return 'green.main';
    }
};

export const getStatusText = (code) => {
    switch (code) {
        case 1:
            return 'Online';
        case 2:
            return 'Preparing';
        case 3:
            return 'Declined';
        default:
            return 'Online';
    }
};
