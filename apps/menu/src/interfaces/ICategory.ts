class ICategory {
  public name!: string;

  toJson() {
    return { ...this };
  }
}

export default ICategory;
