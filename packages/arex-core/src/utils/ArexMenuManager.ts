import { ArexMenu } from './ArexMenu';

export class ArexMenuManager {
  private static menusMap: Record<string, ArexMenu> = {};

  public static getMenus(): Array<ArexMenu> {
    return Object.values(this.menusMap);
  }

  public static registerMenus(menusMap: { [key: string]: ArexMenu }) {
    this.menusMap = {
      ...this.menusMap,
      ...menusMap,
    };
  }

  public static getMenuByType(type?: string): ArexMenu | undefined {
    // TODO 搜索 menusMap children 上的 type
    return type ? (this.menusMap[type] as ArexMenu) : undefined;
  }

  public static getMenusByType(types: Array<string>): Array<ArexMenu | undefined> {
    return types.map((item) => {
      return Object.values(this.menusMap).find((child) => {
        return child.type === item;
      });
    });
  }
}