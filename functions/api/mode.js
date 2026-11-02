import { isTest, json } from '../../lib/dpo.js';
export const onRequestGet = ({ env }) => json({ test: isTest(env), staff: Boolean(env.STAFF_PIN) || isTest(env) });
