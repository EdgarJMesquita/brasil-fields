# brasil-fields

![Brasil Fields](./brasil-fields.svg)

Inspirado no [brasil_fields](https://github.com/flutterbootcamp/brasil_fields)

O jeito mais fácil de utilizar padrões e formatos brasileiros em seu projeto.

## Instalação

npm

```bash
npm install brasil-fields
```

yarn

```bash
yarn add brasil-fields
```

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

| Padrão           | Formatter                      | Formato                                     |
| :--------------- | :----------------------------- | :------------------------------------------ |
| Altura           | alturaInputFormatter()         | 2,22                                        |
| Cartão           | cartaoBancarioInputFormatter() | 0000 1111 2222 3333 4444                    |
| CEP              | cepInputFormatter()            | 99.999-999                                  |
| CPF              | cpfInputFormatter()            | 999.999.99-99                               |
| CNPJ             | cnpjInputFormatter()           | 99.999.999/9999-99                          |
| CPF / CNPJ       | cpfOuCnpjInputFormatter()      | se adapta conforme os números são inseridos |
| CEST             | cestInputFormatter()           | 12.345.67                                   |
| CNS              | cnsInputFormatter()            | 111 2222 3333 4444                          |
| Data             | dataInputFormatter()           | 01/01/1900                                  |
| Hora             | horaInputFormatter()           | 23:59                                       |
| KM               | kmInputFormatter()             | 999.999                                     |
| Cert. nascimento | certNascimentoInputFormatter() | 000000 11 22 3333 4 55555 666 7777777 88    |
| Peso             | pesoInputFormatter()           | 111,1                                       |
| Placa            | placaVeiculoInputFormatter()   | AAA-1234                                    |
| Real             | realInputFormatter()           | 20.550                                      |
| Telefone         | telefoneInputFormatter()       | (99) 9999-9999                              |
| Validade cartão  | validadeCartaoInputFormatter() | 12/24 ou 12/2024                            |
| Temperatura      | temperaturaInputFormatter()    | 27,1                                        |

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
- `UtilBrasilFields.isCPFValido()`
- `UtilBrasilFields.isCNPJValido()`

---
