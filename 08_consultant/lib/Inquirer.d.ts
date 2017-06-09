import { ConsultationResult } from './Consultation';
import { Rule } from './Rule';
export declare class Inquirer {
    inquire(rules: Rule): Promise<ConsultationResult>;
}
export default Inquirer;
