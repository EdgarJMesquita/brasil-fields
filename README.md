# brasil-fields

![Brasil Fields](./brasil-fields.svg)

Inspirado no [brasil_fields flutter](https://github.com/flutterbootcamp/brasil_fields)

O jeito mais fácil de utilizar padrões e formatos brasileiros em seu projeto.

## Apresentação

Este package facilita o desenvolvimento de projetos que utilizam campos com os padrões e formatos brasileiros.

### Como utilizar

Incluir o formatter no input.

#### React

```typescript
import { cpfInputFormatter } from 'brasil-fields';

function App() {
  const [value, setValue] = useState('');

  return <input value={value} onchange={cpfInputFormatter(setValue)} />;
}
```

#### React Native

```typescript
import { cpfInputFormatter } from 'brasil-fields';

function App() {
  const [value, setValue] = useState('');

  return <TextInput value={value} onChangeText={cpfInputFormatter(setValue)} />;
}
```

### Formatters

| Padrão           | Formatter                      | Formato                                                              |
| :--------------- | :----------------------------- | :------------------------------------------------------------------- |
| Altura           | AlturaInputFormatter()         | 2,22                                                                 |
| Cartão           | CartaoBancarioInputFormatter() | 0000 1111 2222 3333 4444                                             |
| CEP              | CepInputFormatter()            | 99.999-999                                                           |
| CPF              | CpfInputFormatter()            | 999.999.99-99                                                        |
| CNPJ             | CnpjInputFormatter()           | 99.999.999/9999-99                                                   |
| CPF / CNPJ       | CpfOuCnpjFormatter()           | se adapta conforme os números são inseridos                          |
| CEST             | CESTInputFormatter()           | 12.345.67                                                            |
| CNS              | CNSInputFormatter()            | 111 2222 3333 4444                                                   |
| Data             | DataInputFormatter()           | 01/01/1900                                                           |
| Hora             | HoraInputFormatter()           | 23:59                                                                |
| KM               | KmInputFormatter()             | 999.999                                                              |
| Cert. nascimento | CertNascimentoInputFormatter() | 000000 11 22 3333 4 55555 666 7777777 88                             |
| Peso             | PesoInputFormatter()           | 111,1                                                                |
| Placa            | PlacaVeiculoInputFormatter()   | AAA-1234 (**não** utilizar `FilteringTextInputFormatter.digitsOnly`) |
| Real             | RealInputFormatter()           | 20.550                                                               |
| Telefone         | TelefoneInputFormatter()       | (99) 9999-9999                                                       |
| Validade cartão  | ValidadeCartaoInputFormatter() | 12/24 ou 12/2024                                                     |
| Temperatura      | TemperaturaInputFormatter()    | 27,1                                                                 |

### Modelos

```dart
Estados.listaEstados
Estados.listaEstadosSigla
Meses.listaMeses
Regioes.listaRegioes
Semana.listaDiasUteis
Semana.listaDiasUteisAbrv

```

### UtilBrasilFields

Métodos que facilitam manipular valores:

- `UtilBrasilFields.gerarCPF()` (XXX.XXX.XXX-XX)
- `UtilBrasilFields.gerarCPF(false)` (XXXXXXXXXXX)
- `UtilBrasilFields.gerarCNPJ()` (XX.YYY.ZZZ/NNNN-SS)
- `UtilBrasilFields.gerarCNPJ(false)` (XXYYYZZZNNNNSS)
- `UtilBrasilFields.obterCpf('11122233344')` (111.222.333-44)
- `UtilBrasilFields.obterCnpj('11222333444455')` (11.222.333/4444-55)
- `UtilBrasilFields.obterCep('11222333')` (11.222-333)
- `UtilBrasilFields.obterCep('11222333', ponto: false)` (11222-333)
- `UtilBrasilFields.obterTelefone('00999998877')` ((00) 99999-8877)
- `UtilBrasilFields.obterTelefone('(00) 99999-8877', mascara: false)` (00999998877)
- `UtilBrasilFields.obterTelefone('999998877', ddd: false)` (99999-8877)
- `UtilBrasilFields.obterTelefone('99999-8877', ddd: false, mascara: false)` (999998877)
- `UtilBrasilFields.obterReal` (R\$ 50.000,00 ou 50.000,00)
- `UtilBrasilFields.obterReal(85437107.04)` (R\$ 85.437.107,04)
- `UtilBrasilFields.obterReal(85437107.04, moeda: false)` (85.437.107,04)
- `UtilBrasilFields.obterReal(85437107.04, moeda: false, decimal: 0)` (85.437.107)
- `UtilBrasilFields.obterDDD('00999998877')` (00)
- `UtilBrasilFields.removeCaracteres` (remove caracteres especiais)
- `UtilBrasilFields.removerSimboloMoeda` (remove o R\$)
- `UtilBrasilFields.converterMoedaParaNumber` (remove o R\$ e retorna um number)
- `UtilBrasilFields.isCPFValido`
- `UtilBrasilFields.isCNPJValido`

---
