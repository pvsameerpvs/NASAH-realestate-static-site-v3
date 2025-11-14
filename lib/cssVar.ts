export function cssVar(name: string, value: string): React.CSSProperties {
  return { [name as any]: value } as unknown as React.CSSProperties;
}
