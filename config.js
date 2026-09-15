// ANJOS EM DUAS RODAS - VERSÃO CORRIGIDA
export const CONFIG_PADRAO = {
  valorBase: 10, ganhoBase: 7.5,
  adicionalLojista: 2, adicionalMotorista: 1.5,
  kmBase: 5,
  dinamicaAtiva: false, dinamicaValor: 5,
  retornoAtivo: false, retornoPercentual: 50,
  superAtivo: false, superLojista: 20, superMotorista: 15
};
export const TIPOS_VEICULO = {
  moto: { label: "MOTO", emoji: "🏍️" },
  utilitario: { label: "UTILITÁRIO", emoji: "🚐" },
  caminhao: { label: "CAMINHÃO", emoji: "🚚" },
  carreta: { label: "CARRETA", emoji: "🚛" }
};
export const PIX_EMPRESA = "22997450131";
export function formatarMoeda(v){ return "R$ "+Number(v||0).toFixed(2).replace(".",","); }
export function formatarData(d){ try{ let dt=d.toDate?d.toDate():new Date(d); return dt.toLocaleString("pt-BR"); }catch{return "-";} }
export function DATA_90_DIAS(){ let d=new Date(); d.setDate(d.getDate()-90); return d; }
export function calcularCorrida(km,opcoes){
  let k=Number(km)||0; let loj=CONFIG_PADRAO.valorBase; let mot=CONFIG_PADRAO.ganhoBase;
  if(k>CONFIG_PADRAO.kmBase){ loj+=(k-CONFIG_PADRAO.kmBase)*CONFIG_PADRAO.adicionalLojista; mot+=(k-CONFIG_PADRAO.kmBase)*CONFIG_PADRAO.adicionalMotorista; }
  if(opcoes?.dinamica&&CONFIG_PADRAO.dinamicaAtiva){ loj+=CONFIG_PADRAO.dinamicaValor; }
  if(opcoes?.super&&CONFIG_PADRAO.superAtivo){ loj=CONFIG_PADRAO.superLojista; mot=CONFIG_PADRAO.superMotorista; }
  return {valorLojista:Number(loj.toFixed(2)), ganhoMotorista:Number(mot.toFixed(2))};
}
window.CONFIG_PADRAO=CONFIG_PADRAO; window.TIPOS_VEICULO=TIPOS_VEICULO; window.PIX_EMPRESA=PIX_EMPRESA;
window.formatarMoeda=formatarMoeda; window.formatarData=formatarData; window.DATA_90_DIAS=DATA_90_DIAS; window.calcularCorrida=calcularCorrida;
