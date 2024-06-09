const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export function isDev(): boolean
{
    return development;
}