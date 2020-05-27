package ru.kitzsable.appserver.transfer;

import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * 18.05.2020
 * YearlyCharacteristicValuesDTO
 * Класс DTO с годовыми значениями некой характеристики, принадлежащей заданому параметру
 *
 * @author Aleks Kitzkalov
 * @version v1.0
 */
@NoArgsConstructor
public class YearlyCharacteristicValuesDTO {
    /**
     * Значение параметра (Пример: "SpaceX" или "Electron")
     */
    public String name;
    /**
     * Список годовых значений некой характеристики
     */
    public List<YearlyValueDTO> yearlyValues;

    /**
     * Конструктор
     * @param name Значение параметра
     * @param yearlyValues Ассоциативный массив (год - значение характеристики)
     */
    public YearlyCharacteristicValuesDTO(String name, Map<Integer, Long> yearlyValues) {
        this.name = name;
        this.yearlyValues = new ArrayList<YearlyValueDTO>();
        yearlyValues.keySet().forEach(year -> {
            YearlyValueDTO yearlyValue = new YearlyValueDTO();
            yearlyValue.year = year;
            yearlyValue.value = yearlyValues.get(year);
            this.yearlyValues.add(yearlyValue);
        });
    }
}
