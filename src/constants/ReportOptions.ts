import { GenericEnum } from './GenericEnum'

export class ReportOptions extends GenericEnum {
  public SEM_TROCO: String = 'Sem Troco'
  public SEM_PRODUTO: String = 'Sem Produto'
  public DESLIGADA: String = 'Desligada'
  public NAO_DEVOLVEU_TROCO: String = 'Não Devolveu o Troco'
  public NAO_ENTREGOU_O_PRODUTO: String = 'Não Entregou o Produto'
  public OUTRO: String = 'Outro'
}

