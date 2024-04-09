将Python代码转换为TypeScript代码需要一些调整，因为TypeScript是JavaScript的一个超集，用于添加静态类型定义，而Python是一种动态类型的语言。此外，TypeScript运行在Node.js环境中或在浏览器中，所以对于文件操作和某些库（如pandas）的使用，我们需要找到JavaScript或TypeScript中的等价方法。考虑到这些限制，下面是一个尽可能接近原始Python逻辑的TypeScript类模板。

请注意，我将使用一些Node.js的库（如exceljs用于读取Excel文件），并且假设有等效的函数或逻辑来处理数据处理的部分（如归一化）。你可能需要安装这些依赖或者根据你的项目需求进行调整。

typescript
import * as Excel from 'exceljs';
import { MinMaxScaler } from 'some-ml-library'; // 假设存在类似库

class Pipeline {
  private dfdePath: string;
  private dfdaPath: string;
  private DROP: string[];
  private name: string;
  private minmax: boolean;
  private df_codebook: any; // 这些类型应该根据实际数据结构进行定义
  private df: any;
  private orginal: any;
  private numeric: any;

  constructor(
    dfdePath: string,
    dfdaPath: string,
    DROP: string[] = [],
    name: string = "",
    minmax: boolean = false
  ) {
    this.dfdePath = dfdePath;
    this.dfdaPath = dfdaPath;
    this.DROP = DROP;
    this.name = name;
    this.minmax = minmax;
    this.main();
  }

  private process(x: string): string {
    // 去除前面的标识
    if (x.indexOf('.') <= 2 && x.indexOf('.') !== -1) {
      return x.split('.', 2)[1].trim();
    } else if (x.indexOf('/') <= 2 && x.indexOf('/') !== -1) {
      return x.split('/', 2)[1].trim();
    } else {
      return x.trim();
    }
  }

  private async readCodebookAndProcess(): Promise<void> {
    // 使用Excel库读取Excel文件
    const workbook = new Excel.Workbook();
    await workbook.xlsx.readFile(`./${this.dfdePath}`);
    const worksheet = workbook.getWorksheet(this.name);

    // 填充空值，应用process函数等逻辑，此处需根据实际库的API进行调整
    // ...
  }

  private async readDataAndProcess(): Promise<void> {
    // 读取数据和处理逻辑
    // ...
  }

  private async processReverseDatas(): Promise<void> {
    // 处理反向数据逻辑
    // ...
  }

  private async processAgg(): Promise<void> {
    // 处理聚合数据逻辑
    // ...
  }

  private async processMinMaxDatas(): Promise<void> {
    // 归一化处理逻辑
    // ...
  }

  private async processDrop(): Promise<void> {
    // 处理删除列逻辑
    // ...
  }

  private async main(): Promise<void> {
    await this.processDrop();
    // 主逻辑
  }
}

// 使用示例
const pipeline = new Pipeline('dfdePath.xlsx', 'dfdaPath.xlsx', [], '', false);
这段代码只是一个大致框架，具体的数据处理逻辑（如读取Excel文件、数据的归一化处理等）需要根据实际情况以及你选择的JavaScript或TypeScript库来实现。特别是，pandas库在Python中非常强大且易用，但在JavaScript/TypeScript中可能没有直接等价的库，所以某些函数可能需要手动实现或寻找替代的npm包。