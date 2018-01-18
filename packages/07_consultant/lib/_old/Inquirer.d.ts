import { ConsultationResult } from './Consultation';
import Rule from './Rule';
declare class Inquirer {
    inquire(rules: Rule): Promise<ConsultationResult>;
}
export { Inquirer as default };
