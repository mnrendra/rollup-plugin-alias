import a, {
    b,
    c
} from '../../src/abc';
const abc = async () => {
    const d = await import('../../src/def');
    console.log(a, b, c, d);
};
export default abc;